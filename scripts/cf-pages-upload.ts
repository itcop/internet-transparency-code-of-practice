import { blake3 } from "@noble/hashes/blake3.js";
import { bytesToHex } from "@noble/hashes/utils.js";
import { readdirSync, readFileSync, statSync } from "fs";
import { join, extname, relative, basename, dirname } from "path";

const ROOT = "/tmp/mrt-stage/deploy";
const ACCOUNT = "ed9b6757db93df52c9e2dd2c1606a594";
const PROJECT = "itcop-org";
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
if (!TOKEN) throw new Error("no CLOUDFLARE_API_TOKEN");
const API = "https://api.cloudflare.com/client/v4";
const SPECIAL = new Set(["_headers", "_redirects", "_worker.js", "_routes.json"]);
const MIME: Record<string, string> = {
  html: "text/html; charset=utf-8", json: "application/json", txt: "text/plain; charset=utf-8",
  css: "text/css; charset=utf-8", js: "text/javascript; charset=utf-8", svg: "image/svg+xml",
  png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", ico: "image/x-icon",
  webp: "image/webp", gif: "image/gif", woff2: "font/woff2", woff: "font/woff", xml: "application/xml",
};

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    if (name === ".DS_Store") continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const files = walk(ROOT);
const manifest: Record<string, string> = {};
const assets: { hash: string; base64: string; contentType: string; path: string }[] = [];
let headersContent: string | null = null;

for (const f of files) {
  const rel = "/" + relative(ROOT, f).split("/").join("/");
  const base = basename(f);
  const atRoot = dirname(f) === ROOT;
  const content = readFileSync(f);
  if (atRoot && SPECIAL.has(base)) {
    if (base === "_headers") headersContent = content.toString("utf-8");
    continue;
  }
  const b64 = content.toString("base64");
  const ext = extname(f).slice(1).toLowerCase();
  // Cloudflare Pages asset hash: blake3(base64Content + extension), hex, first 32 chars
  const hash = bytesToHex(blake3(new TextEncoder().encode(b64 + ext))).slice(0, 32);
  manifest[rel] = hash;
  assets.push({ hash, base64: b64, contentType: MIME[ext] || "application/octet-stream", path: rel });
}

console.log(`files: ${files.length} | assets: ${assets.length} | _headers: ${headersContent ? "yes" : "no"}`);
console.log("manifest:", JSON.stringify(manifest, null, 0));

async function jf(url: string, init: RequestInit) {
  const r = await fetch(url, init);
  const j: any = await r.json().catch(() => ({}));
  return { status: r.status, j };
}

// 1. upload token (JWT)
const tok = await jf(`${API}/accounts/${ACCOUNT}/pages/projects/${PROJECT}/upload-token`, {
  headers: { Authorization: `Bearer ${TOKEN}` },
});
const jwt = tok.j?.result?.jwt;
if (!jwt) { console.error("upload-token failed", tok.status, JSON.stringify(tok.j)); process.exit(1); }
console.log("got upload JWT");

// 2. check-missing
const uniqueHashes = [...new Set(assets.map((a) => a.hash))];
const miss = await jf(`${API}/pages/assets/check-missing`, {
  method: "POST",
  headers: { Authorization: `Bearer ${jwt}`, "Content-Type": "application/json" },
  body: JSON.stringify({ hashes: uniqueHashes }),
});
if (!miss.j?.success) { console.error("check-missing failed", miss.status, JSON.stringify(miss.j)); process.exit(1); }
const missing = new Set<string>(miss.j.result ?? []);
console.log(`missing blobs: ${missing.size}/${uniqueHashes.length}`);

// 3. upload missing (dedup by hash), batched
const seen = new Set<string>();
const toUpload = assets.filter((a) => missing.has(a.hash) && !seen.has(a.hash) && seen.add(a.hash));
const chunk = <T>(arr: T[], n: number) => arr.reduce<T[][]>((a, _, i) => (i % n ? a : [...a, arr.slice(i, i + n)]), []);
for (const batch of chunk(toUpload, 40)) {
  const payload = batch.map((a) => ({ key: a.hash, value: a.base64, metadata: { contentType: a.contentType }, base64: true }));
  const up = await jf(`${API}/pages/assets/upload`, {
    method: "POST",
    headers: { Authorization: `Bearer ${jwt}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!up.j?.success) { console.error("upload failed", up.status, JSON.stringify(up.j)); process.exit(1); }
  console.log(`uploaded batch of ${batch.length}`);
}

// 4. create production deployment (multipart)
const form = new FormData();
form.append("manifest", JSON.stringify(manifest));
form.append("branch", "main");
if (headersContent) form.append("_headers", new Blob([headersContent]), "_headers");
const dep = await jf(`${API}/accounts/${ACCOUNT}/pages/projects/${PROJECT}/deployments`, {
  method: "POST",
  headers: { Authorization: `Bearer ${TOKEN}` },
  body: form,
});
if (!dep.j?.success) { console.error("deployment failed", dep.status, JSON.stringify(dep.j)); process.exit(1); }
console.log("DEPLOY OK");
console.log("url:", dep.j.result?.url);
console.log("aliases:", JSON.stringify(dep.j.result?.aliases ?? []));
console.log("stages:", JSON.stringify((dep.j.result?.stages ?? []).map((s: any) => s.name)));
