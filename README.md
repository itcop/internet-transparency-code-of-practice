# Internet Transparency Code of Practice

A working draft code of practice for making controller identification, notice
disclosure, rights access, versioning and evidence of control **inspectable
before identification or personal data collection**.

Published at [itcop.org](https://itcop.org/).

## Status

**Working draft.** Nothing here has been adopted by any standards body or
supervisory authority, and nothing here should be cited as though it had.

The white paper, *Transparency by Default: the Internet Transparency Stack,
co-regulated identification, and Operational Transparency for AI*, version 0.1,
31 August 2026, is at [itcop.org/paper/](https://itcop.org/paper/).

Related work, none of which this repository speaks for: ISO/IEC PWI, *Internet
Transparency Code of Practice profile through privacy by design*, in JTC 1/SC 44/WG 1;
PWI 26689 in JTC 1/SC 27/WG 5; and the Council of Europe Convention 108+
transborder work. Where this draft and any of those differ, they govern and this
does not.

## What the code asks

Four requirements, stated here in the form the stakeholder survey puts to
supervisory authorities.

An implementer should:

1. Publish the identity of the accountable party, and the material against which
   a decision will be made, at a location that resolves before any exchange in
   which the individual is identified.
2. Make that disclosure versioned, so a claim about what was disclosed can be
   tested against what was actually published at the time.
3. Provide a rights access point that resolves without requiring the individual
   to identify themselves first.
4. Retain evidence of control that an authority can inspect, without exposing
   personal data in order to inspect it.

## How this is developed

In the open, in this repository. What changed, when, and who changed it is the
commit history. What is settled and what is open is [PROCESS.md](PROCESS.md).

That is not incidental. The code asks organisations to be inspectable rather
than asserted, so a code developed in private would fail the requirement it puts
to everyone else.

## Comment on it

Open an issue, or start a discussion. **Commenting places nobody on any list**,
and there is no membership to join. See [PROCESS.md](PROCESS.md).

Supervisory authorities: the stakeholder survey is separate from this repository
and carries its own undertaking that no individual response is attributed.
Reading or commenting here does not change that.

## What is in this repository

The public site for itcop.org, and the code of practice as it develops.

| Path | What it is |
|---|---|
| `index.html`, `styles.css`, `app.js` | The site. Bilingual EN/FR, no build step. Copy currently lives as i18n strings in `app.js` |
| `paper/` | The white paper page |
| `licence/` | 0PN Machine Reuse Terms 1.0, the reuse terms the paper carries |
| `reuse/evidence/` | The reuse reservation, expressed as a record |
| `.well-known/` | `tdmrep.json`, the text and data mining reservation |
| `docs/`, `assets/` | Supporting material |
| `MRT-DEPLOY.md` | How the machine reuse terms are served, and the content types they need |
| `SPEC-3step-1fn-transparency-gateway.md` | Specification for the three-step first factor notice gateway |

## Licence

See [LICENSE.md](LICENSE.md).

## Contact

info@tcieg.org
