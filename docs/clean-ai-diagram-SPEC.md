# Build spec: animated Clean AI receipt diagram

Status: PLAN, approved for scope 2026-09-01. Not yet built.
Decisions locked (Mark): full 7-scene Clean AI receipt story; inline animated SVG on the site; lives on `/paper/` below the executive summary, scroll-triggered play-once with a replay control.

## Purpose

Make the Clean AI receipt flow and lifecycle legible in one self-revealing diagram: from ungoverned "dirty AI", through the notice and receipt at the threshold, along the resolution chain, across the participant lifecycle, to the undermark on output and "clean AI". It reinforces the report on the same page.

## Storyboard (7 scenes)

Each scene dwells, then transitions to the next. Target total run about 22 to 28 seconds. Captions are real text, not baked into the SVG raster.

| # | Scene | On screen | Motion | Caption |
|---|-------|-----------|--------|---------|
| 1 | Dirty AI | Data and knowledge tokens flow into a model block; no record | tokens stream in, model fills, no receipt appears | "Dirty AI asks for trust. Accountability you are told exists." |
| 2 | The threshold | The DFC signpost rises at the boundary before the model | signpost draws on; flow pauses at the boundary | "Verify who is accountable before the operation proceeds." |
| 3 | Notice to receipt | A 1FN notice card, then a receipt card mints from it | notice fades in, acknowledge pulse, receipt card slides out | "A notice is acknowledged. An anonymous receipt is issued." |
| 4 | Resolution chain | receipt to Controller Identification Record to Notice Event Log to evidence route | a particle travels the path, each node lights as it arrives | "The receipt resolves to an accountable record and an evidence route." |
| 5 | Lifecycle chain | Designer, Developer, Trainer, Deployer in a row, each with a receipt | receipts appear left to right; links draw from each to the upstream one | "Each participant issues a receipt that references the one before it." |
| 6 | Undermark on output | The model emits an output card carrying the undermark | output emerges; a line resolves from the undermark back down to the evidence route | "Output carries an undermark that resolves back to the chain." |
| 7 | Clean AI | The model now bears the 0PN aperture mark and a check | mark settles onto the model; subtle glow | "Clean AI carries evidence. Accountability you can verify." |

## Visual system

- Palette from `styles.css` and the DFC mark: navy `#14213d`, forest green (from `assets/dfc-itcop.png`), paper/cream background, amber `#d9a441` only for the receipt/notice accents (matches the gate).
- Marks: reuse `assets/dfc-itcop.png` motif for the signpost; the 0PN aperture from `assets/0pn-badge.svg` for scene 7.
- One typographic scale; labels in the site font; nodes are rounded rects, edges are 2px strokes.
- Canvas: a single responsive SVG, `viewBox="0 0 960 540"`, `width: 100%`, `max-width: 46rem`, centered to match `.paper`.

## Technical spec

- **One inline SVG** authored at rest (this doubles as the static fallback). Group per scene (`<g data-scene="1">` ... `data-scene="7">`), plus persistent elements.
- **Draw-on** for paths and connectors via `stroke-dasharray` + `stroke-dashoffset` transitions. **Particle motion** along edges via CSS `offset-path: path(...)`. Fades and slides via `opacity`/`transform`. No animation library.
- **Sequencer**: a small JS state machine (about 60 lines) toggles a `data-active` scene attribute on a timeline; CSS keys off `[data-active]`. Keep total added weight under about 15KB.
- **Trigger**: `IntersectionObserver` at ~40% visibility plays once; a "Replay" button restarts the timeline.
- **Reduced motion / no JS / print**: `@media (prefers-reduced-motion: reduce)` and the no-JS path show the fully drawn static SVG with all captions stacked; the timeline never runs.
- **Accessibility**: SVG has `role="img"` + `<title>`/`<desc>`; an off-screen ordered list narrates the 7 steps; the replay button is a real `<button>`.
- **Integration**: a self-contained partial injected into `/paper/index.html` below the executive summary; scoped class prefix `caid-` so no global CSS leakage; must not disturb the gate, undermark, or watermark.

## Tasks

- **T1 Storyboard + node/edge spec** (Jane directs; Conrad supplies exact receipt-field and resolution-order detail). Output: final scene table with every node, edge, label, and per-scene timing. Gate for T2.
- **T2 Static SVG at rest** (Designer/Artist). The full diagram, brand-styled, semantic, doubling as the reduced-motion/print fallback. Acceptance: renders correctly with zero JS.
- **T3 Animation layer** (Conrad or inline). CSS keyframes + JS sequencer + IntersectionObserver + replay. Acceptance: 7 scenes play in order, under 15KB added, no layout shift.
- **T4 Accessibility + fallbacks**. reduced-motion static path, aria narration, print. Acceptance: passes a reduced-motion check and reads correctly with JS off.
- **T5 Integrate into /paper/**. Self-contained partial below the exec summary. Acceptance: gate/undermark/watermark unaffected.
- **T6 Verify** (Interceptor). Capture each scene, reduced-motion, and mobile width; no console errors, no layout shift.
- **T7 (optional) Remotion export**. Same storyboard to MP4/GIF for social and the newsletter.

## Verification (definition of done)

Diagram plays once on scroll on `/paper/`, all 7 scenes legible; static fallback correct under prefers-reduced-motion and with JS off; no console errors; no cumulative layout shift; the receipt gate, undermark, and watermark on the page still work; Interceptor screenshots captured per scene.

## Open inputs to confirm before T2

- Exact captions (draft above, refine for voice).
- Whether scene 5 names the four roles or keeps them generic.
- Loop-once vs offer a subtle idle loop after first play.
