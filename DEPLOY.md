# Deploying itcop.org

## How it works

`itcop.org` is a **Cloudflare Pages project in Direct Upload mode**, not connected
to this repository. Cloudflare refuses to convert a Direct Upload project to a
git-connected one, and the Cloudflare GitHub App is not installed on the `itcop`
organisation, so the connection cannot be made from here.

`.github/workflows/deploy.yml` closes that gap. A push to `main` that touches the
site stages the public tree, stamps a fresh asset version, deploys with
**wrangler** via `cloudflare/wrangler-action`, and then checks what is actually
live. Repository governance files are excluded from what gets published.

## One-time setup, still outstanding

The workflow fails on its first step until a deploy credential exists.

1. In the Cloudflare dashboard, create an API token with **Account, Cloudflare
   Pages, Edit** on account `ed9b6757db93df52c9e2dd2c1606a594`, and nothing else.
2. Add it to this repository as the secret `CLOUDFLARE_API_TOKEN`.
3. Run the workflow once from the Actions tab to confirm it deploys.

**Do not reuse the `cloud-gpr` token.** It carries DNS, DNSSEC and Workers scope
across thirteen zones. A deploy credential in a public repository's CI should be
able to deploy this one site and nothing else.

The workflow runs only on `push` to `main` and on manual dispatch, so a pull
request from a fork never receives the secret.

## Why CI uses wrangler and local deploys do not

**In CI, wrangler is the right tool.** The runner has a real node, and
`cloudflare/wrangler-action` handles the install and the auth.

**On Mark's machine it is not.** There is no node, and `bunx wrangler pages
deploy` is a **silent no-op**: it prints the version banner, exits 0, and uploads
nothing. A pseudo-TTY does not fix it. That is why `scripts/cf-pages-upload.ts`
exists, talking to the Pages Direct Upload API directly, and why it stays.

Two things follow. Never conclude a local wrangler deploy worked because it
exited 0, and never conclude nothing is deployed because a local `wrangler pages
deployment list` printed only a banner. Verify against the REST API or the live
URL.

## Deploying by hand

```sh
rsync -a --delete \
  --exclude='.git' --exclude='.github' --exclude='scripts' \
  --exclude='README.md' --exclude='PROCESS.md' --exclude='LICENSE.md' \
  --exclude='CONTRIBUTING.md' --exclude='MRT-DEPLOY.md' --exclude='SPEC-*.md' \
  --exclude='.gitignore' --exclude='paper-gate.worker.js' --exclude='.DS_Store' \
  ./ /tmp/itcop-stage/

ITCOP_DEPLOY_ROOT=/tmp/itcop-stage CLOUDFLARE_API_TOKEN=... bun scripts/cf-pages-upload.ts
```

## Two things that will bite

**Asset caching.** `app.js` is served with `max-age=14400`. A deploy without a
fresh `?v=` on the reference in `index.html` reaches the origin but not the
browser, for up to four hours. The workflow stamps it from the commit sha. No
token in use has cache-purge scope, so the query string is the mechanism.

**Content types.** `_headers` sets `application/ld+json` for the machine reuse
terms and the `tdm-reservation` and `tdm-policy` headers for every page. It must
be included in whatever is uploaded. The staging step fails if it is missing, and
the workflow asserts both headers on the live site afterwards.

**The paper gate is an exact worker route.** `itcop.org/paper/read` is bound to
the `itcop-paper-gate` worker with no trailing wildcard, and **an exact route does
not match a URL carrying a query string**. Verifying it with a cache buster makes
a correctly bound route look broken, because the request falls through to Pages
instead. The workflow checks that path with no query string for exactly this
reason. Every other check keeps its cache buster.
