# Finalized Specification — 3-Step 1FN Transparency Gateway (ITCoP Signal Badge signup)

**Authoritative build spec.** Author: Conrad (Private AI Standards Engineer). Date: 2026-08-30.
**Status:** FINAL — reconciled against DEVBOOK (`~/.claude/PAI/MEMORY/WORK/0pn-1fn-demo/DEVBOOK-3step-1fn-transparency-gateway.md`), Workstream 6 brief, and GATEWAY-B1-SPEC. Implementation verified in real Chrome via Interceptor.
**Implementation home:** `~/Projects/itcop-site/` (`index.html` + `app.js` + `styles.css`). Static, framework-free, no build step, Cloudflare Pages Direct Upload ready.
**Clause trace:** PWI 26689 §6.2 (1FN anonymous disclosure), §8.3.5 (notice receipt, individual-held), §8.7.5 (transparency by default), §8.8 (rights context / Level model). Honesty discipline per Workstream-6 invariant "L0 honesty."

> **Scope boundary (load-bearing).** This is the **campaign-phase, client-side self-demo** of the 1FN — NOT the GATEWAY-B1 "Passport Control" interstitial (`gateway-spec/GATEWAY-B1-SPEC.md`). Those are two distinct surfaces that share the 1FN concept and the L0 honesty rules. See §1 (Relationship to prior specs). This spec governs the itcop.org signup flow only.

---

## 1. Relationship to prior specs (reconciliation)

| Prior artifact | Relationship to this build |
|---|---|
| **DEVBOOK** (Mark, 2026-08-30) | This spec's direct source. Finalized here field-for-field. |
| **Workstream 6** (`BRIEF-Conrad-lab-restructure.md` §57-63) | Same conceptual module ("Transparency Gateway 1FN"). W6 describes the **`core/` component** form (B1 interstitial, tabbed, CIR-wired, tamper-verify chip). THIS build is the **campaign signup** expression — simpler, standalone, no CIR-tab wiring, no tamper chip. Not a fork: it is the account-less signup front door; the B1 component is the notice-before-entry interstitial. Both obey the same L0/honesty/canonicalization discipline. |
| **GATEWAY-B1-SPEC** (Jane, 2026-08-24) | A DIFFERENT, more elaborate surface (5 CIR tabs, `.window` chrome, ANCR-normative receipt schema, client-side `sha256`+`json-canonical-v1` tamper-verify). NOT superseded and NOT implemented here. When the two converge (roadmap), this signup flow's Step-3 receipt should adopt the B1 canonical JSON-LD receipt schema (§6.5 of B1) and the `canonicalize.ts` module. Flagged as future work, §8. |
| **gateway.tokens.json** (98-token DTCG set) | B1's token layer. This campaign build uses the itcop-site's own `styles.css` variables (`--paper-white`, `--font-display`, navy panel), NOT the `--gw-*` set. Divergence is intentional (different surface, different brand register); reconcile only if the two surfaces merge. |

**Key deltas the new DEVBOOK introduced over the prior gateway-spec line:**
1. **3-step progressive disclosure** (notice → form → receipt), one step visible at a time, icon-per-step — this is NEW; B1 is a single tabbed window, not a stepper.
2. **Register-to-broadcast toggle** revealing an **inline extended 1FN ("0PN Notice, Level 1")** + org fields — NEW; encodes the Level-0 → Level-1 escalation inside one flow.
3. **Receipt-ID format `itcop-1fn-<YYYYMMDD>-<12hex>`** and **notice-ref `0pn-notice-<lang>-v<8hex>` (FNV-1a)** — NEW, campaign-specific, client-only. B1 uses ANCR-normative `notice_event_id = "ne_" + sha256(...)[:16]`. These are different id schemes for different surfaces; do not conflate.

---

## 2. Component structure (as built)

Single dark-navy panel `.badge-panel` inside `section.badge-section#badge`. Persistent header: step icon (`#badge-hero-icon`) + gateway title `.badge-gateway-title` = "Transparency Gateway for Consent Online". One step visible at a time; prior steps hidden via the `hidden` attribute.

```
section.badge-section#badge
  .badge-copy            ← campaign framing (label / heading / provenance / body)
  .badge-panel
    img#badge-hero-icon.badge-step-icon   ← swaps: consent-icon → grey-check → activated-icon
    p.badge-gateway-title                 ← "Transparency Gateway for Consent Online"
    div#badge-notice        [STEP 1]      ← 0PN Notice (the 1FN)
    button#badge-continue                 ← "Continue" (hides on advance)
    form#badge-form[hidden] [STEP 2]      ← First name + Email + toggles
      label.badge-toggle #badge-newsletter    ← TCIEG newsletter opt-in
      label.badge-toggle #badge-register-toggle ← "Register your transparency badge…"
      div#badge-org-fields[hidden]        ← inline extended 1FN (Level 1) + org fields
      button[type=submit]                 ← "Continue" (submits)
    div#badge-receipt[hidden] [STEP 3]    ← Notice Receipt
      dl.badge-receipt-fields             ← Receipt ID / Notice reference / Issued at
      button#receipt-download             ← Download badge (SVG)
      button#receipt-copy-embed           ← Copy embed snippet
      p.badge-receipt-disclaimer          ← client-side demo receipt honesty note
      div#receipt-register-confirm[hidden] ← shown only if register was ON
```

## 3. State machine

Three states, client-side only, driven by `app.js` (no framework, no router).

| State | Icon (`#badge-hero-icon` src) | Visible | Transition trigger |
|---|---|---|---|
| **S1 consent** | `assets/consent-icon.png` | `#badge-notice` + `#badge-continue` | initial |
| **S2 pending** | `assets/grey-check.png` | `#badge-form` | click `#badge-continue` → hide notice+button, reveal form, focus email |
| **S3 activated** | `assets/activated-icon.png` | `#badge-receipt` (+ `#receipt-register-confirm` if register ON) | submit `#badge-form` → generate receipt, hide form, reveal receipt |

Sub-transition inside S2: toggling `#badge-register-toggle` reveals/hides `#badge-org-fields` (the inline extended 1FN + Level-1 org fields) and sets `aria-expanded`. Register state is captured on submit; org fields collected only when the toggle is ON.

**Icon states are self-descriptive of assurance progress**, not certification claims: consent (notice served) → pending (details captured, nothing validated) → activated (client-side receipt issued, honestly labelled demo).

## 4. i18n contract

Bilingual EN/FR via `data-i18n` (textContent), `data-i18n-alt` (image alt), `data-i18n-aria-label` (aria-label). Language from `?lang=fr` query param (default `en`); toggle buttons `[data-lang-switch]`; URL synced via `history.replaceState`. All flow copy lives under the `badge.*` i18n namespace:

- `badge.gateway.{title,continue}`
- `badge.notice.{title,intro,collected,purpose,basis,storage,receipt}` — Step 1 (the 1FN)
- `badge.form.{firstNameLabel,emailLabel,newsletterLabel,registerLabel,registerNote,submit,empty,confirmation}`
- `badge.org.levelTag`, `badge.org.notice.{title,intro,collected,purpose,validation,storage}`, `badge.org.form.{lastNameLabel,countryLabel,websiteLabel,privacyContactLabel,accessPointLabel,submit,empty}`, `badge.org.pending.{title,note}` — the inline extended 1FN (Level 1)
- `badge.receipt.{heading,idLabel,noticeLabel,issuedLabel,download,copyEmbed,embedCopied,embedFailed,disclaimer}`
- `badge.register.{pending,note}` — the queued directory + Level-1 confirmation

**Register-note copy is verbatim per DEVBOOK** (`badge.form.registerNote`): "Be the first to test the Internet Transparency Signal by registering to broadcast digital transparency. We will send you an email to verify your entry and your organisation's active legal status, and we will add you to the signaling test waitlist, to activate the badge's online transparency signal."

## 5. Receipt-ID and notice-reference algorithms

### 5.1 Receipt ID — `itcop-1fn-<YYYYMMDD>-<12hex>`
```
datePart = issuedAt.slice(0,10).replaceAll("-","")          // YYYYMMDD from ISO-8601
entropy  = crypto.randomUUID().replaceAll("-","").slice(0,12)  // 12 hex, secure context
         | randomHex(6)                                        // fallback: 6 bytes → 12 hex
receipt_id = `itcop-1fn-${datePart}-${entropy}`
```
Per-issuance unique (entropy is random, not content-derived). Example verified: `itcop-1fn-20260830-baca41bb7010`. Regex gate: `^itcop-1fn-\d{8}-[0-9a-f]{12}$`.

### 5.2 Notice reference — `0pn-notice-<lang>-v<8hex>` (FNV-1a 32-bit)
```
NOTICE_KEYS = ["title","intro","collected","purpose","basis","storage","receipt"]
noticeText  = NOTICE_KEYS.map(k => i18n[lang].badge.notice[k]).join("\n")
ref         = `0pn-notice-${lang}-v${fnv1aHex(noticeText)}`

fnv1aHex(s):  h = 0x811c9dc5
              for each char: h ^= charCodeAt; h = Math.imul(h, 0x01000193) >>> 0
              return h.toString(16).padStart(8,"0")
```
**Deterministic and content-addressed per language + notice text.** Same notice content → same reference (verified: two runs both yielded `0pn-notice-en-v2639b279`). If the notice copy changes, the reference changes — this is the honest version-binding property, at demo strength. Regex gate: `^0pn-notice-(en|fr)-v[0-9a-f]{8}$`.

> **Honesty caveat (clause-critical).** FNV-1a is a **non-cryptographic** hash. It is fit for a client-side demo version-stamp (collision-resistance is not a threat here — the notice set is tiny and controller-authored), but it is NOT the tamper-evidence primitive. The authoritative, hash-chained notice-event receipt uses `sha256` + the frozen canonicalizers (`json-canonical-v1` for the receipt body, `concat-delim-v3` for the NEL row) on the WHC Montreal box. The Step-3 disclaimer says exactly this. Do not present the FNV-1a reference as tamper-proof.

## 6. Level-0 vs Level-1 data model

| Aspect | Level 0 (default) | Level 1 (register toggle ON) |
|---|---|---|
| Trigger | any signup | `#badge-register-toggle` checked |
| Notice served | `badge.notice.*` (the 1FN) | + inline extended 1FN `badge.org.notice.*` ("0PN Notice, Level 1") |
| Data collected | first name, email | + last name, country, org website, privacy contact, access-point URL (optional) |
| Meaning | self-asserted support signal → directory | full inspectable controller record (website, contact, legal basis) with legal-status validation |
| Post-submit | receipt only | receipt + `#receipt-register-confirm` (queued directory + Level-1 pending) |
| Validation | none (self-asserted) | legal-status check against a public registry — **server-side, when the 0PN backend is live** (nothing validated client-side; no result claimed) |

This mirrors the Workstream-6 / brief Level ladder: Level 0 = broadcasting-directory support signal; Level 1 = controller profile with validation. The escalation lives inside one 3-step flow (register toggle → inline Level-1 notice + fields), never a separate page.

## 7. Secure-context fallback

`file://` is not a secure context, so `crypto.subtle` / `crypto.randomUUID` / `navigator.clipboard` may be absent. The build degrades gracefully:

- **Receipt entropy:** `crypto.randomUUID()` when present, else `randomHex()` using `crypto.getRandomValues`, else `Math.random()` per byte. Receipt ID always generates.
- **Notice reference:** pure-JS FNV-1a (`Math.imul`, no BigInt, no crypto) — works everywhere.
- **Badge download:** `fetch` the SVG → Blob → `<a download>`; on `file://`/fetch-block, fall back to `window.open(BADGE_SVG_URL)`.
- **Copy embed:** `navigator.clipboard.writeText`; fallback to a hidden `<textarea>` + `document.execCommand("copy")`; on total failure, show `badge.receipt.embedFailed` telling the user to copy manually.

## 8. Actions and external references

- **Download badge:** `assets/0pn-badge.svg` → saved as `itcop-transparency-signal-badge.svg`.
- **Copy embed:** self-contained `<a href="https://itcop.org/#directory"><img src="https://itcop.org/assets/0pn-badge.svg" …></a>`.
- **Directory:** fetched from `https://ca1.0pn.org/registry/index.json` (the live Canadian box; verified 200, `count:0`, honest `absence-not-judgement` semantics). Renders the empty state honestly when `controllers` is empty or the fetch fails.

## 9. Verification evidence (2026-08-30, Interceptor, real Chrome)

- S1→S2→S3 all advance; icon swaps consent → grey-check → activated (verified).
- Receipt ID matches `^itcop-1fn-\d{8}-[0-9a-f]{12}$`; notice-ref matches `^0pn-notice-(en|fr)-v[0-9a-f]{8}$` (verified).
- FNV-1a determinism: identical notice content yields identical reference across runs (verified `0pn-notice-en-v2639b279` twice).
- Register toggle reveals org fields + sets `aria-expanded`; register-confirm shows only when register ON (verified).
- Directory renders live from `ca1.0pn.org`, empty state honest (verified 200 + rendered copy).
- No console errors, no network 4xx/5xx on the flow (verified).
- app.js parses clean after the meta/dead-code cleanup; flow re-verified post-edit.

## 10. Deferred / roadmap

1. **Backend receipt** — client-only demo issues `demo:true`; the anchored hash-chained `notice_acknowledged` NEL event (WHC Montreal, `sha256` + `concat-delim-v3`) is deferred (§6.6 of GATEWAY-B1-SPEC). The Step-3 disclaimer states this. Endpoints `/api/badge` are TODO-stubbed.
2. **Convergence with GATEWAY-B1 receipt schema** — when this signup flow and the B1 interstitial merge, adopt the ANCR-normative JSON-LD receipt (`schema_version`, `presented_at`, `controller_public_id_uri`, `notice_version_reference`, `canonicalization: json-canonical-v1`) and import `~/Projects/0pn-lab/core/canonical/canonicalize.ts` so the client receipt is reproducible/tamper-verifiable. Not in this campaign build.
3. **Real 0PN vector mark** — IconDesigner task; drops into the same icon slot.
