# Google Tag Manager — container setup

Notes for whoever sets up the GTM container used by the website (`NEXT_PUBLIC_GTM_ID`).

## What the website already does

- **Consent Mode v2 defaults.** Before GTM loads, an inline script in `<head>` sets every non-essential signal to `denied` (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`, `functionality_storage`, `personalization_storage`), `security_storage` to `granted`, and `wait_for_update: 500`. `ads_data_redaction` is on.
- **Returning visitors.** The same script reads the `provision_consent` cookie and runs `gtag('consent', 'update', …)` straight away, so their tags can fire on the first page view.
- **Consent choices.** When a visitor chooses in the banner, the site runs `gtag('consent', 'update', …)` and pushes:
  ```js
  { event: "consent_update", consent: { analytics_storage: "granted", ad_storage: "denied", … } }
  ```
  Banner categories map to signals like this:

  | Banner category | Consent Mode signals |
  |---|---|
  | Live chat | `functionality_storage` |
  | Analytics | `analytics_storage` |
  | Marketing | `ad_storage`, `ad_user_data`, `ad_personalization` |

- **Form submissions.** After a successful submission the site pushes:
  ```js
  { event: "form_submit", form_name: "contact" }   // or "referral"
  ```
  No form field values are sent.

## Setting up the container

1. **Page views.** The site is a single-page app after the first load: moving between pages does not reload the page. Use the built-in **History Change** trigger (together with the normal page view trigger) for page view tags. A GA4 tag with enhanced measurement ("page changes based on browser history events") already does this by itself.
2. **Consent.** Every tag must respect Consent Mode. Google tags (GA4, Google Ads, Conversion Linker) do this automatically. For any other tag, set **Additional consent checks → Require additional consent for tag to fire** (e.g. `analytics_storage` or `ad_storage`). Turn on **Admin → Container settings → Enable consent overview** to check every tag.
3. **Form conversions.** Create a **Custom Event** trigger for `form_submit`, and a Data Layer Variable for `form_name`, to send form conversions to GA4 or Ads.
4. **Consent changes.** If a tag must fire as soon as a visitor gives consent (not only on the next page), use a Custom Event trigger for `consent_update`.
5. **Check** in Tag Assistant (Preview): with no choice made, the Consent tab shows everything denied except security; after accepting, the matching signals change to granted.

## Adding a new cookie or tool

Update the Cookies section of the Privacy Policy (`src/views/PrivacyPolicy/Policies.tsx`) and the banner copy (`src/components/consent/ConsentBanner.tsx`). If the change needs visitors to choose again, bump `CONSENT_VERSION` in `src/lib/consent.ts`.
