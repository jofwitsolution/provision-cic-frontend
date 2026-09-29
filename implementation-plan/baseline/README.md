# Phase 0 Baseline — Vite SPA (pre-migration)

Captured 2026-09-24 from branch `feat/nextjs-migration` at commit `4316950` (identical to `main`), using the Vite production build served by `vite preview`.

## Screenshots

Stored locally in `screenshots/` and not committed (about 67 MB, git-ignored). Regenerate them from `main` with `scripts/screenshots.mjs` if needed.

- `desktop/` (1440×900, full page) and `mobile/` (390×844 @2x, full page), 13 routes each: home, about, support, events, the 3 event detail pages, referrals, accommodation, contact, faq, terms-and-conditions, privacy-policy
- `mobile/nav-sheet-open.png`: mobile navigation sheet open
- FAQ accordion open state: the first item is open by default, so `faq.png` shows it
- The script scrolls each page before capturing, so `whileInView` animations have run

**Existing quirk (not a capture error):** the mobile nav sheet is semi-transparent, so page content shows through behind the links. This is how the current site looks. It stays unchanged in the migration unless requested otherwise.

## Lighthouse (mobile preset, simulated throttling)

Full reports in `lighthouse/` (HTML + JSON, git-ignored). Lighthouse 13, Chrome headless, local preview server.

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| `/` | 28 | 89 | 100 | 85 |
| `/about` | 27 | 85 | 100 | 92 |
| `/events/provision-hostel-opening-coventry-march-2026` | 34 | 89 | 100 | 92 |

| Page | LCP | FCP | TBT | CLS | Speed Index | Page weight |
|---|---|---|---|---|---|---|
| `/` | 30.9 s | 3.8 s | 2,200 ms | 0.141 | 6.3 s | 8,685 KiB |
| `/about` | 18.1 s | 5.6 s | 1,520 ms | 0.141 | 7.3 s | 2,895 KiB |
| `/events/provision-hostel-opening-coventry-march-2026` | 9.1 s | 4.7 s | 860 ms | 0.141 | 7.0 s | 5,684 KiB |

Failed SEO audits:
- `robots-txt` on all pages: the SPA fallback serves `index.html` for `/robots.txt`
- `link-text` on `/`: non-descriptive link text such as "Learn More" / "Read More"

Main causes of poor performance: large unoptimised PNG/JPEG images (the home page is 8.7 MB), one JavaScript bundle over 500 kB, fonts loaded by a render-blocking CSS `@import`, and all content rendered client-side.

These are lab numbers from a local server, so they are for before/after comparison, not real-user data. Re-run under the same conditions after each phase.

## API & CORS

- Production API base URL, read from the live bundle: `https://provision-cic-backend.vercel.app/api/v1`
- Local `.env` uses `/api/v1`, which goes through the Vite dev proxy to `http://localhost:4000`
- Endpoints used: `POST /email/contact-us`, `POST /email/refer-someone`

CORS preflight (`OPTIONS`, `Access-Control-Request-Method: POST`) results:

| Origin | Allowed |
|---|---|
| `https://www.provisionsupportservice.co.uk` | Yes |
| `https://provisionsupportservice.co.uk` | Yes |
| Vercel preview URL (`*.vercel.app`) | **No** |
| `http://localhost:3000` (Next.js dev) | **No** |

Result: forms will fail on Vercel preview deployments. There are two fixes for Phase 1:

1. **Recommended:** keep the browser calling a same-origin `/api/v1`, and add a Next.js `rewrites()` that forwards it to the backend (the backend URL goes in a server-only `API_ORIGIN` env var). Every environment, including previews and localhost, is then same-origin with no CORS, and the backend needs no change.
2. Add the preview domains to the backend's CORS allow-list.

## Domain

- `https://provisionsupportservice.co.uk` redirects to **`https://www.provisionsupportservice.co.uk`**, so `www` is the current primary host.
- The redirect is a **307 Temporary Redirect**. It should be permanent (308) so search engines move ranking signals to `www`. Change it in Vercel → Project → Settings → Domains (Phase 2 item).
- Phase 2 canonical URLs, `metadataBase` and the sitemap must use the `www` host. Otherwise the redirect should be flipped in Vercel first.
