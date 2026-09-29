import { pushDataLayer } from "@/lib/gtm";

// Bump when the cookie policy changes so everyone is asked again.
export const CONSENT_VERSION = 1;
export const CONSENT_COOKIE = "provision_consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 365; // 12 months

export const OPEN_CONSENT_EVENT = "provision:open-consent";

export type ConsentCategory = "functional" | "analytics" | "marketing";
export type ConsentPreferences = Record<ConsentCategory, boolean>;
export type StoredConsent = ConsentPreferences & { v: number; ts: string };

export const allGranted: ConsentPreferences = {
  functional: true,
  analytics: true,
  marketing: true,
};

export const allDenied: ConsentPreferences = {
  functional: false,
  analytics: false,
  marketing: false,
};

type ConsentValue = "granted" | "denied";

const toValue = (granted: boolean): ConsentValue =>
  granted ? "granted" : "denied";

// Google Consent Mode v2 signals for a set of choices. Keep in step with
// the mapping inside consentModeScript().
export function toConsentModeState(prefs: ConsentPreferences) {
  return {
    functionality_storage: toValue(prefs.functional),
    analytics_storage: toValue(prefs.analytics),
    ad_storage: toValue(prefs.marketing),
    ad_user_data: toValue(prefs.marketing),
    ad_personalization: toValue(prefs.marketing),
  };
}

export function parseConsent(raw: string | null | undefined) {
  if (!raw) return null;
  try {
    const value = JSON.parse(decodeURIComponent(raw)) as Partial<StoredConsent>;
    if (value.v !== CONSENT_VERSION) return null;
    return {
      v: value.v,
      ts: String(value.ts ?? ""),
      functional: value.functional === true,
      analytics: value.analytics === true,
      marketing: value.marketing === true,
    } satisfies StoredConsent;
  } catch {
    return null;
  }
}

export function readConsentCookie() {
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`),
  );
  return match ? match[1] : null;
}

function writeConsentCookie(consent: StoredConsent) {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie =
    `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(consent))}` +
    `; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
}

// Google tags can't remove cookies they already set, so clear them when
// consent is withdrawn. They are usually set on the parent domain.
const cookiePrefixes: Partial<Record<ConsentCategory, string[]>> = {
  analytics: ["_ga", "_gid", "_gat"],
  marketing: ["_gcl", "_fbp", "_fbc"],
};

function clearCookies(category: ConsentCategory) {
  const prefixes = cookiePrefixes[category] ?? [];
  const host = location.hostname;
  const domains = ["", host, `.${host.replace(/^www\./, "")}`];

  for (const cookie of document.cookie.split("; ")) {
    const name = cookie.split("=")[0];
    if (!prefixes.some((prefix) => name.startsWith(prefix))) continue;
    for (const domain of domains) {
      document.cookie =
        `${name}=; Max-Age=0; Path=/` + (domain ? `; Domain=${domain}` : "");
    }
  }
}

export function saveConsent(prefs: ConsentPreferences) {
  const consent: StoredConsent = {
    v: CONSENT_VERSION,
    ts: new Date().toISOString(),
    functional: prefs.functional,
    analytics: prefs.analytics,
    marketing: prefs.marketing,
  };
  writeConsentCookie(consent);

  const state = toConsentModeState(prefs);
  window.gtag?.("consent", "update", state);
  pushDataLayer({ event: "consent_update", consent: state });

  (Object.keys(allDenied) as ConsentCategory[])
    .filter((category) => !prefs[category])
    .forEach(clearCookies);

  return consent;
}

export function openConsentPreferences() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}

// Runs in <head> before Google Tag Manager: defines gtag, sets every
// non-essential signal to denied, then applies a saved choice straight
// away so returning visitors' tags fire on the first page view.
export function consentModeScript() {
  return `window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500});
gtag('set','ads_data_redaction',true);
try{var m=document.cookie.match(/(?:^|; )${CONSENT_COOKIE}=([^;]*)/);
if(m){var c=JSON.parse(decodeURIComponent(m[1]));
if(c&&c.v===${CONSENT_VERSION}){var g=function(b){return b===true?'granted':'denied'};
gtag('consent','update',{functionality_storage:g(c.functional),analytics_storage:g(c.analytics),ad_storage:g(c.marketing),ad_user_data:g(c.marketing),ad_personalization:g(c.marketing)});}}}catch(e){}`;
}
