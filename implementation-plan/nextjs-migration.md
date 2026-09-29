# Next.js 16 Migration, SEO & Tracking — Implementation Plan

Migrate the ProVision Support Services CIC frontend from a Vite + React Router SPA to Next.js 16 (App Router), then improve SEO and add Google Search Console, Google Tag Manager and a cookie consent banner.

**Hard rule: the existing design is retained.** No redesign; markup, classes and styles carry over. Any visual difference found during review is a bug.

## Decisions

| Topic | Decision |
|---|---|
| Production domain | `https://www.provisionsupportservice.co.uk` (the bare domain already redirects to `www`, found in Phase 0) |
| Backend API | **Same-origin forwarding (approved).** The browser always calls `/api/v1` on the site's own domain, and a Next.js rewrite forwards it to the backend given by the server-only `API_ORIGIN` env var (production: `https://provision-cic-backend.vercel.app`; local: `http://localhost:4000`). No CORS in any environment; no backend change needed |
| Router | Next.js App Router, all pages statically generated at build time |
| Analytics | Google Tag Manager only. No GA4 for now. Container ID supplied later via `NEXT_PUBLIC_GTM_ID` |
| Consent | Custom consent banner in the existing site style, with Google Consent Mode v2 (default: denied) |
| Search Console | DNS TXT verification (Domain property) preferred; meta tag fallback via `NEXT_PUBLIC_GSC_VERIFICATION` |
| Hosting | Vercel (unchanged) |

## Starting point (Vite SPA)

- Vite 7, React 19, TypeScript, Tailwind v4 (`@tailwindcss/vite`), shadcn/Radix, framer-motion, react-hook-form + zod, axios, sonner, Tawk.to.
- 11 routes in `src/App.tsx`: `/`, `/about`, `/support`, `/events`, `/events/:slug`, `/referrals`, `/accommodation`, `/contact`, `/faq`, `/terms-and-conditions`, `/privacy-policy`.
- Event content is static in `src/lib/data.tsx` (`recentNews`).
- SEO via `react-helmet` in `src/components/shared/Meta.tsx`, which only runs in the browser. Social scrapers see only the static `index.html` tags, and the canonical/`og:url` come from `window.location`.
- `vercel.json` rewrites every path to `index.html`.

---

## Phase 0 — Baseline & safety net

- [x] Create branch `feat/nextjs-migration` from `main`
- [x] Capture baseline screenshots of every route at desktop (1440px) and mobile (390px) widths, including open states (mobile nav sheet, FAQ accordion)
- [x] Record baseline Lighthouse scores (Performance, Accessibility, Best Practices, SEO) for `/`, `/about`, `/events/<slug>`
- [x] Confirm the production API URL value and the backend CORS settings (Vercel preview domains may need allowing)

Results: [baseline/README.md](baseline/README.md). Key findings:
- Lighthouse (mobile): Performance 27–34, SEO 85–92; home page LCP 30.9 s, page weight 8.7 MB
- API: `https://provision-cic-backend.vercel.app/api/v1`. CORS allows the production origins but **blocks Vercel preview and localhost origins**. Fix (approved): same-origin `/api` forwarding (see Phase 1)
- The bare domain redirects to **`www.provisionsupportservice.co.uk`**, which is the primary host for canonical URLs
- The mobile nav sheet is semi-transparent in the current design; kept as-is

## Phase 1 — Framework migration (no visual change)

### Dependencies & config
- [x] Install `next@16`, `@tailwindcss/postcss`; add `postcss.config.mjs`
- [x] Remove `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `react-router-dom`, `react-helmet`, `@types/react-helmet`, `eslint-plugin-react-refresh`
- [x] Update `package.json` scripts: `dev: next dev`, `build: next build`, `start: next start`, `lint: eslint .`
- [x] Create `next.config.ts` with a rewrite of `/api/:path*` → `${API_ORIGIN}/api/:path*` in all environments (replaces the Vite dev proxy); fail the build clearly if `API_ORIGIN` is missing
- [x] Merge the tsconfig files into one Next-compatible `tsconfig.json`, keeping the `@/*` → `src/*` alias
- [x] Update `eslint.config.js` to use `eslint-config-next` (flat config); `next lint` no longer exists in v16
- [x] Update `.gitignore` (`.next/`, `next-env.d.ts`)
- [x] Delete `index.html`, `vite.config.ts`, `src/main.tsx`, `src/App.tsx`, `tsconfig.app.json`, `tsconfig.node.json`, `public/vite.svg`
- [x] Delete the SPA rewrite in `vercel.json` (remove the file if nothing else remains)

### Environment variables
- [x] `src/lib/axios-client.ts`: set `baseURL` to the fixed `/api/v1`, and remove `VITE_APP_API_URL` (no public API env var needed)
- [x] Add a server-only `API_ORIGIN` (no `NEXT_PUBLIC_` prefix): `http://localhost:4000` locally, `https://provision-cic-backend.vercel.app` in Vercel. Rewrites are resolved at build time, so it must be set for the build in Production and Preview
- [x] Rename `VITE_TAWK_PROPERTY_ID` / `VITE_TAWK_WIDGET_ID` → `NEXT_PUBLIC_TAWK_PROPERTY_ID` / `NEXT_PUBLIC_TAWK_WIDGET_ID`
- [x] Remove unused `VITE_APP_NAME` / `VITE_APP_VERSION` (or rename if needed)
- [x] Update `.env.example` with `API_ORIGIN` and placeholders for `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GSC_VERIFICATION`
- [ ] Update the environment variables in the Vercel project settings (Production + Preview)

### App shell
- [x] `src/app/layout.tsx`: `<html lang="en-GB">`, global CSS imports (`index.css`, `App.css`), `<Toaster position="top-right" />`, Tawk widget
- [x] Fonts: replace the Google Fonts `@import` lines in `index.css` with `next/font/google` (Bebas Neue, Mogra, DM Sans), exposed through the existing `--font-Bebas-Neue`, `--font-Mogra`, `--font-DM-Sans` tokens
- [x] Tawk.to: rewrite `TawkTo.tsx` as a client component using `next/script` with `strategy="lazyOnload"`
- [x] Remove the scroll-to-top effect (Next.js does this on navigation)
- [x] Move `favicon.ico` to `src/app/favicon.ico`
- [x] `src/app/not-found.tsx` 404 page using the existing Navbar, Footer and styles

### Routes
- [x] `/` → `src/app/page.tsx`
- [x] `/about` → `src/app/about/page.tsx`
- [x] `/support` → `src/app/support/page.tsx`
- [x] `/events` → `src/app/events/page.tsx`
- [x] `/events/[slug]` → `src/app/events/[slug]/page.tsx` with `generateStaticParams` from `recentNews`, awaited `params`, and `notFound()` for unknown slugs
- [x] `/referrals` → `src/app/referrals/page.tsx`
- [x] `/accommodation` → `src/app/accommodation/page.tsx`
- [x] `/contact` → `src/app/contact/page.tsx`
- [x] `/faq` → `src/app/faq/page.tsx`
- [x] `/terms-and-conditions` → `src/app/terms-and-conditions/page.tsx`
- [x] `/privacy-policy` → `src/app/privacy-policy/page.tsx`

Each `page.tsx` is a small server component that exports metadata and renders the existing page component from `src/pages/**` (renamed to `src/views/**` so it doesn't clash with the Pages Router convention).

### Component updates
- [x] Replace `react-router-dom` `Link to=` / `NavLink to=` with `next/link` `Link href=` (Navbar, NavbarMobile, Footer, EventCard, JoinProvision, heroes, home sections, EventDetailsInfo)
- [x] `useLocation().pathname` → `usePathname()` in `Navbar.tsx` and `NavbarMobile.tsx`
- [x] `EventDetailsInfo`: take `slug` as a prop from the route instead of `useParams()`
- [x] Add `"use client"` to components using hooks, framer-motion, react-hook-form, Radix interactivity or sonner
- [x] Remove `<Meta />` usage from every page (replaced in Phase 2); delete `Meta.tsx`
- [x] Update `src/@types` declarations (Tawk `window` typings) for the Next.js setup

### Phase 1 verification
- [x] `npm run build` passes with every route listed as static (○ / ●)
- [x] `npx tsc --noEmit` and `npm run lint` pass
- [x] Visual comparison against Phase 0 screenshots: no differences on any route, desktop and mobile
- [x] Navigation, active nav link state, mobile nav sheet, FAQ accordion and animations all work
- [ ] Contact and referral forms submit successfully through the `/api` forwarding (locally and on the Vercel preview); error toasts still appear
- [ ] Check the backend still gets what it needs from forwarded requests (e.g. client IP via `x-forwarded-for`, if it uses it for rate limiting or logging)
- [ ] Tawk.to widget loads
- [x] Unknown route and unknown event slug return a 404 page

Results (2026-09-24):
- `next build`: 16 routes, all static (○) or SSG (●); `tsc --noEmit` clean; `eslint .` 0 errors, 26 warnings (`no-img-element`, fixed by the Phase 2 `next/image` work; one React Compiler note on react-hook-form `watch`)
- Screenshots re-captured with `baseline/scripts/screenshots.mjs` and pixel-diffed against Phase 0: all 27 captures have identical page heights; at most 0.03% of pixels differ, all sub-pixel font anti-aliasing from self-hosted fonts
- Checked in the browser: client-side navigation scrolls to top, active nav link, mobile nav sheet, FAQ accordion, form validation messages, no console or hydration errors, unknown route and unknown event slug return 404
- `/api` forwarding checked against the production backend with a GET (backend 404 returned through the rewrite). No form was submitted, to avoid sending real emails
- Tawk.to cannot be checked locally: Tawk blocks localhost (the official snippet fails the same way), so check it on the Vercel preview (the preview domain may need adding in Tawk)
- **Vercel:** `vercel.json` is removed; set the project Framework Preset to **Next.js** (Output Directory back to default) and add `API_ORIGIN`, `NEXT_PUBLIC_TAWK_*` for Production and Preview

## Phase 2 — SEO

### Metadata
- [x] Root layout metadata: `metadataBase` (`https://www.provisionsupportservice.co.uk`), title template `%s | ProVision Support Services CIC`, default description, `openGraph` (`siteName`, `locale: en_GB`, `type: website`), `twitter` card, `robots`
- [x] Per-page `title`, `description` and `alternates.canonical` for every static route (reusing the copy currently passed to `<Meta />`)
- [x] `generateMetadata` for `/events/[slug]`: event title, excerpt, canonical, `openGraph.type: article`, `publishedTime`, first event image

### Crawling
- [x] `src/app/sitemap.ts`: all indexable static routes plus every event slug (event `date` used for `lastModified`)
- [x] `src/app/robots.ts`: allow all, link to sitemap
- [ ] Confirm the bare domain → `www` redirect is permanent (308/301) in Vercel domain settings

### Social sharing
- [x] Default 1200×630 Open Graph image (`src/app/opengraph-image.png` or generated with `next/og`) using the existing logo and brand colours
- [ ] Check previews with the LinkedIn Post Inspector and Facebook Sharing Debugger

### Structured data (JSON-LD)
- [x] `Organization` / `LocalBusiness` (name, logo, URL, Coventry address, phone, email, social profiles) in the root layout
- [x] `FAQPage` on `/faq`, built from the same data the accordion renders
- [x] `NewsArticle` (or `Event` for dated events) on `/events/[slug]`
- [x] `BreadcrumbList` on inner pages

### Performance & content (design unchanged)
- [x] Convert `<img>` to `next/image`, keeping the rendered dimensions and `object-fit` exactly; `priority` on hero/LCP images; correct `sizes`
- [x] Rename asset files with spaces or brackets (e.g. `Frame 11 (4).png`) to readable kebab-case names; update `src/constant/images.ts`
- [x] Remove unused images from `src/assets`
- [x] Audit: exactly one `<h1>` per page and a sensible heading order
- [x] Audit: meaningful `alt` text on content images, `alt=""` on decorative ones
- [x] Fix the "Chrismas" typo in the event title (slug unchanged)

### Phase 2 verification
- [x] View source on every route shows the correct `<title>`, description, canonical and OG tags in the server HTML
- [x] `/sitemap.xml` and `/robots.txt` render correctly
- [ ] Google Rich Results Test passes for the home, FAQ and one event page
- [x] Lighthouse SEO score is 100; Performance improved against the Phase 0 baseline
- [x] Visual comparison against Phase 0 screenshots: still no differences

Results (2026-09-24):
- Metadata lives in `src/lib/seo.ts` (`pageMetadata()`, shared `baseOpenGraph`, JSON-LD builders). Next.js merges `openGraph` shallowly, so every page repeats the shared fields, including the default image (`/opengraph-image`, generated by `src/app/opengraph-image.tsx` from `src/assets/primary-logo-large.png`). Events with photos use their first photo instead
- Server HTML checked on all 13 routes: correct `<title>`, description, canonical (`www` host), `og:*`, `twitter:card` and JSON-LD (`Organization` on every page; `WebSite` on `/`; `FAQPage` on `/faq`; `NewsArticle` on events; `BreadcrumbList` on inner pages). The root layout sets no canonical, so the 404 page has none and is `noindex`
- Descriptions: the thin ones (About, Accommodation, Contact, Privacy, Terms) were rewritten from on-page copy, and all are about 140–165 characters. **ProVision to review the wording**
- Images: every `<img>` is now `next/image` with static imports, so width and height are known. Full-bleed heroes use `preload` and `sizes="100vw"`. The home hero grid uses `fetchPriority="high"` on the large tile, because the LCP image changes with viewport width. Resized files round their dimensions, which made `h-auto` images up to 1px shorter; `aspectStyle()` in `src/lib/utils.ts` pins the original ratio
- Assets: 26 files renamed to kebab-case and 9 unused files removed. The FAQ and Privacy heroes were byte-identical, so the duplicate was removed and both use `hero-faq-privacy.png`. `public/img/primary-logo.png` is kept as the JSON-LD logo URL
- Headings: one `<h1>` per page. The FAQ, Privacy, Terms and Contact heroes are now the `<h1>`; the in-page titles (and the referral form's second `<h1>`) became `<h2>`, with their subsections moved down one level. Only tags changed, not classes (Tailwind preflight resets heading styles)
- Alt text: hero backgrounds, and icons next to their own text, use `alt=""`; the logo uses the organisation name; event photos use "<event title>, photo N". Footer social links have `aria-label`s, the mobile menu button has `aria-label="Open menu"`, and the "Learn More" / "Read More" links have screen-reader-only context. This fixes the `link-text` SEO audit with no visual change
- Visual diff against Phase 0 (27 captures): all page heights identical. The remaining differences are in photo areas only (re-encoding by the image optimiser): at most 0.62% of pixels, on the event galleries
- Lighthouse (mobile, same local setup as Phase 0; reports in `baseline/lighthouse/phase-2/`):

| Page | Performance | Accessibility | Best Practices | SEO | LCP | Page weight |
|---|---|---|---|---|---|---|
| `/` | 28 → 50 | 89 → 98 | 100 | 85 → 100 | 30.9 s → 6.4 s | 8,685 → 1,066 KiB |
| `/about` | 27 → 59 | 85 → 90 | 100 | 92 → 100 | 18.1 s → 4.2 s | 2,895 → 933 KiB |
| `/events/provision-hostel-opening-coventry-march-2026` | 34 → 51 | 89 → 93 | 100 | 92 → 100 | 9.1 s → 5.4 s | 5,684 → 1,228 KiB |

  CLS went from 0.141 to 0. Performance is now limited mainly by total blocking time (1.0–1.7 s, mostly framer-motion and client components). This is left as-is to keep the design unchanged
- Still to do on the Vercel preview or production (a public URL is needed): Rich Results Test, LinkedIn Post Inspector and Facebook Sharing Debugger, and changing the bare-domain redirect from 307 to 308

## Phase 3 — Consent, Tag Manager & Search Console

### Cookie consent banner
- [x] `ConsentBanner` client component styled with the existing design tokens and button components; shows on the first visit only
- [x] Options: **Accept all**, **Reject non-essential**, **Manage preferences** (analytics / marketing toggles)
- [x] Store the choice in a first-party cookie (`provision_consent`, 12 months) with a version number, so changes to the policy can prompt users again
- [x] "Cookie settings" link in the Footer to reopen the preferences
- [x] Accessible: keyboard navigable, focus managed, appropriate ARIA; does not block reading the page
- [x] Update `/privacy-policy` with a cookies section (necessary, analytics, marketing; Tawk.to as functional). Content to be reviewed by ProVision
- [x] Decide how Tawk.to is classed (functional vs. requires consent) and gate it if required (gated behind a "Live chat" category; ProVision to confirm)

### Google Consent Mode v2
- [x] Inline script in `<head>`, before GTM, setting defaults: `ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage` = `denied`; `security_storage` = `granted`; `wait_for_update: 500`. (`functionality_storage` now starts `denied` and follows the Live chat choice)
- [x] On load, apply the stored choice with `gtag('consent', 'update', …)`
- [x] On banner choice, run `gtag('consent', 'update', …)` and push a `consent_update` event to `dataLayer`

### Google Tag Manager
- [x] Add `@next/third-parties`; render `<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />` in the root layout, only when the ID is set
- [x] Push `form_submit` events (`form_name`: `contact` | `referral`) to `dataLayer` after a successful submission
- [x] Document for the container: use the built-in "History Change" trigger for page views between pages; tags must respect Consent Mode
- [ ] **Blocked:** set `NEXT_PUBLIC_GTM_ID` in Vercel once the container ID is available

### Google Search Console
- [ ] Add a Domain property for `provisionsupportservice.co.uk` and verify by DNS TXT record at the domain registrar (requires registrar access)
- [x] Fallback: support `NEXT_PUBLIC_GSC_VERIFICATION` in `metadata.verification.google`
- [ ] After production deploy: submit `https://www.provisionsupportservice.co.uk/sitemap.xml`
- [ ] Request indexing for the home page and key service pages using URL Inspection

### Phase 3 verification
- [ ] With no choice made: GTM loads with consent denied (checked in Tag Assistant); no analytics or marketing cookies set
- [x] Accept / reject / manage each update consent correctly and persist across reloads and pages
- [x] The Footer "Cookie settings" link reopens the banner
- [ ] `form_submit` events appear in the Tag Assistant preview
- [x] Banner matches the site design on desktop and mobile

Results (2026-09-29):
- Code: `src/lib/consent.ts` (cookie, Consent Mode mapping, inline `<head>` script), `src/lib/gtm.ts` (`pushDataLayer`), `src/components/consent/` (`ConsentBanner`, `useConsent`). Container notes for whoever sets up GTM: [gtm-container.md](gtm-container.md)
- Banner categories: Strictly necessary (always on), **Live chat** (Tawk.to, `functionality_storage`), Analytics (`analytics_storage`), Marketing (`ad_*`). Accept all and Reject non-essential are equally prominent. Cookie: `provision_consent`, JSON `{ v, ts, functional, analytics, marketing }`, 12 months, `SameSite=Lax`, `Secure` on HTTPS. Bump `CONSENT_VERSION` to ask everyone again
- **Tawk.to is gated:** it only loads once Live chat is allowed, because it sets cookies as soon as it loads (ICO guidance treats that as needing consent). Visitors who reject won't see the chat window. If withdrawn, the widget is hidden. **ProVision to confirm** this classification
- Withdrawing analytics or marketing also deletes existing Google cookies (`_ga*`, `_gid`, `_gcl*`), since tags can't remove them
- The banner is non-modal, renders only on the client (static HTML unchanged), is first in the tab order, and only moves focus when the visitor opens it (Manage preferences, or Footer "Cookie settings"); Escape closes it when a choice already exists, and focus goes back to the trigger. Footer gained a "Cookie settings" item; the only other visual change is the new Cookies section on `/privacy-policy` (anchor `#cookies`) using the existing section layout. **ProVision to review the wording**
- Checked in Chrome (Playwright, desktop 1440 and mobile 390, test build with `NEXT_PUBLIC_GTM_ID=GTM-TEST123` and a test verification token), all passing: banner on first visit only; no cookies and no Tawk request before a choice; GTM requested with `consent default` queued before `gtm.js`; Reject / Save preferences / Accept all write the cookie, update consent and push `consent_update`; the stored choice is applied from `<head>` on reload and on other pages; Footer link reopens preferences; old cookie version prompts again; `_ga` cleared on withdrawal; `google-site-verification` meta present; no console errors
- `next build`: all routes still static; `tsc` clean; `eslint` 0 errors
- Still to do with a real container / public URL: Tag Assistant checks, `form_submit` in preview (not submitted locally to avoid sending real emails), Search Console DNS verification, sitemap submission

## Phase 4 — Release

- [ ] Update `README.md` (scripts, env vars, project structure); update or remove `TAWK_SETUP.md` for the new env var names
- [ ] Open a PR for each phase (1: framework, 2: SEO, 3: consent/tracking), each with a Vercel preview
- [ ] ProVision reviews the preview for design parity and content
- [ ] Merge and deploy to production
- [ ] Post-deploy smoke test on `https://www.provisionsupportservice.co.uk`: all routes, forms, chat widget, banner, sitemap
- [ ] Monitor Search Console coverage and Core Web Vitals over the following 2–4 weeks

## Open items

- [ ] GTM container ID (to be supplied)
- [ ] DNS registrar access for Search Console verification
- [ ] Tawk.to consent classification (currently gated behind the Live chat category; confirm)
- [ ] Business details for structured data: postal address, phone, email, social profile URLs (confirm the ones on the site are current)
  - The `Organization` JSON-LD uses the Contact page details (32 Hazelville Road, Birmingham B28 9QF; info@ and referrals@ addresses; +44 7828 887031 and +44 7581 467406). The FAQ answers say **31** Hazelville Road, and the site describes the service as Coventry-based. Confirm the correct address before release
