# ITCoP Static Landing Page

This repository contains a bilingual static landing page for `itcop.org`. It is framework-free, uses no build step, and is ready for Cloudflare Pages Direct Upload.

Files:

- `index.html`: semantic page structure and bilingual content hooks
- `styles.css`: responsive styles for the forest and badge registers
- `app.js`: vanilla JS i18n, language toggles, URL sync, and client-side form confirmations
- `favicon.svg`: root favicon copied from `assets/favicon-A.svg`

Notes:

- The page defaults to English and loads French with `?lang=fr`.
- Petition and badge forms are client-only in this build. They prevent submission and show confirmation states until the notice receipt backend is live.
- All asset paths are relative.
