# 0PN-MRT 1.0 deployment bundle for ITCoP.org

Version 1.0, prepared 31 August 2026. Everything here is static. No application
logic is required except the evidence endpoint, which is noted separately at the
end.

## File map

Upload the contents of `itcop.org/` to the web root, preserving paths.

| Local file | Deploy to | Content type |
| --- | --- | --- |
| `itcop.org/.well-known/tdmrep.json` | `https://itcop.org/.well-known/tdmrep.json` | `application/json` |
| `itcop.org/licence/0pn-mrt-1.0.json` | `https://itcop.org/licence/0pn-mrt-1.0.json` | `application/ld+json` |
| `itcop.org/licence/0pn-mrt-1.0.txt` | `https://itcop.org/licence/0pn-mrt-1.0.txt` | `text/plain; charset=utf-8` |
| `itcop.org/reuse/evidence/index.json` | `https://itcop.org/reuse/evidence/index.json` | `application/json` |

All four must return HTTP 200 before any published document carries the reuse
notice. A reservation that does not resolve is worse than no reservation,
because it is evidence of an unmaintained claim.

## Constraints that are easy to get wrong

1. **Do not let the CDN or the framework rewrite `/.well-known/`.** Many static
   hosts strip dot directories by default. This is the single most common cause
   of a TDMRep deployment silently not existing.
2. **`tdmrep.json` is an array, not an object.** The keys are hyphenated,
   `tdm-reservation` and `tdm-policy`, per the W3C Community Group report. Do
   not normalise them to snake_case or camelCase.
3. **`0pn-mrt-1.0.json` and `0pn-mrt-1.0.txt` are immutable.** Once published,
   never edit in place. Corrections become 1.1 at a new path, with 1.0 left
   resolving. The version reference is the whole evidentiary point.
4. **Serve without authentication and without a cookie wall.** All four paths
   must be reachable by an unauthenticated crawler and by a person who is not
   identified.
5. **The JSON-LD prefix is `mrt`, not `0pn`.** A compact IRI prefix beginning
   with a digit is not safe across JSON-LD processors.

## HTTP headers

TDMRep's preferred technique is the header, so set it in addition to the
well-known file. Apply site-wide.

```
tdm-reservation: 1
tdm-policy: https://itcop.org/licence/0pn-mrt-1.0.json
```

nginx:

```nginx
add_header tdm-reservation "1" always;
add_header tdm-policy "https://itcop.org/licence/0pn-mrt-1.0.json" always;

location = /.well-known/tdmrep.json { default_type application/json; }
location = /licence/0pn-mrt-1.0.json { default_type application/ld+json; }
location = /licence/0pn-mrt-1.0.txt { default_type "text/plain; charset=utf-8"; }
```

Cloudflare Pages or Netlify, in `_headers`:

```
/*
  tdm-reservation: 1
  tdm-policy: https://itcop.org/licence/0pn-mrt-1.0.json

/licence/0pn-mrt-1.0.json
  Content-Type: application/ld+json

/licence/0pn-mrt-1.0.txt
  Content-Type: text/plain; charset=utf-8
```

Apache, in `.htaccess`:

```apache
Header set tdm-reservation "1"
Header set tdm-policy "https://itcop.org/licence/0pn-mrt-1.0.json"
```

## HTML metadata

Add to the `<head>` of every published page, and in particular the white paper
landing page.

```html
<meta name="tdm-reservation" content="1">
<meta name="tdm-policy" content="https://itcop.org/licence/0pn-mrt-1.0.json">
<link rel="license" href="https://creativecommons.org/licenses/by/4.0/">
<link rel="terms-of-machine-reuse" href="https://itcop.org/licence/0pn-mrt-1.0.json">
```

## PDF builds

If the white paper is published as PDF, the reservation belongs in the XMP
metadata as well, using the `tdm` namespace `http://www.w3.org/ns/tdmrep/`,
with `tdm:reservation` set to 1 and `tdm:policy` set to the policy URL. A PDF
that leaves the site loses the HTTP header, so without XMP the reservation does
not travel with the file.

## Verification

Run after deploying. All four should return 200 and the expected shape.

```bash
curl -sI https://itcop.org/ | grep -i '^tdm-'
curl -s https://itcop.org/.well-known/tdmrep.json | jq -e 'type == "array" and .[0]["tdm-reservation"] == 1'
curl -s https://itcop.org/licence/0pn-mrt-1.0.json | jq -e '.["mrt:base_licence_modified"] == false'
curl -sI https://itcop.org/licence/0pn-mrt-1.0.txt | head -n 1
curl -s https://itcop.org/reuse/evidence/index.json | jq -e '.anonymity.identification_required == false'
```

## The evidence endpoint, the one non-static piece

`/reuse/evidence/index.json` is static and can go up now. The working endpoint
behind it is not, and it should not be faked.

Minimum viable implementation:

- `POST /reuse/evidence` accepts `work`, optional `dataset_id`, and a
  requester-generated `reply_token`. It stores the request against the token.
- `GET /reuse/evidence/{reply_token}` returns the response once written, or a
  pending status.
- No account, no email, no CAPTCHA that requires identity, no analytics on
  these paths. Rate limit by request shape and volume only.
- Retain requests only as long as needed to answer them.

Until that exists, either ship a plain page at `/reuse/evidence` giving the
request format and `info@tcieg.org` as the interim route, or hold the notice
back. Publishing MRT-3 while the anonymous route does not work would reproduce
exactly the failure the terms exist to correct.
