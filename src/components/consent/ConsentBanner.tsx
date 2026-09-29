"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Switch } from "radix-ui";
import { Cookie, X } from "lucide-react";
import {
  allDenied,
  allGranted,
  OPEN_CONSENT_EVENT,
  type ConsentCategory,
  type ConsentPreferences,
} from "@/lib/consent";
import { updateConsent, useConsent } from "./useConsent";

const categories: {
  key: ConsentCategory | "necessary";
  label: string;
  description: string;
}[] = [
  {
    key: "necessary",
    label: "Strictly necessary",
    description:
      "Needed for the website to work, such as remembering your cookie choices. These are always on.",
  },
  {
    key: "functional",
    label: "Live chat",
    description:
      "Lets you chat with our team through the Tawk.to chat window. Tawk.to sets cookies to keep your conversation going between pages.",
  },
  {
    key: "analytics",
    label: "Analytics",
    description:
      "Help us understand how visitors use the website, such as which pages are visited most, so we can improve it.",
  },
  {
    key: "marketing",
    label: "Marketing",
    description:
      "Help us measure our campaigns and show relevant content about our services on other websites.",
  },
];

const primaryButton =
  "rounded-2xl border-2 border-primary-100 bg-primary-100 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(147,71,19,0.25)] transition-all duration-300 hover:border-[#7a3f14] hover:bg-[#7a3f14] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-100/30";
const outlineButton =
  "rounded-2xl border-2 border-primary-100 bg-transparent px-5 py-2.5 text-sm font-semibold text-primary-100 transition-all duration-300 hover:bg-[#f9f3ef] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-100/30";

type View = "summary" | "preferences";

const ConsentBanner = () => {
  const consent = useConsent();
  const reduceMotion = useReducedMotion();
  const headingId = useId();
  const descriptionId = useId();

  const [reopened, setReopened] = useState(false);
  const [view, setView] = useState<View>("summary");
  const [draft, setDraft] = useState<ConsentPreferences>(allDenied);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const focusOnOpenRef = useRef(false);

  // Shown on the first visit (no stored choice) or when reopened from
  // the footer. Never during server rendering or hydration.
  const open = consent === null || reopened;
  const canDismiss = consent != null;

  useEffect(() => {
    const onOpen = () => {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      focusOnOpenRef.current = true;
      setDraft(consent ? { ...consent } : allDenied);
      setView("preferences");
      setReopened(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
  }, [consent]);

  // Move focus into the panel only when the visitor asked for it (opening
  // settings or switching view), not when it appears on page load.
  useEffect(() => {
    if (open && focusOnOpenRef.current) {
      focusOnOpenRef.current = false;
      headingRef.current?.focus();
    }
  }, [open, view]);

  const close = () => {
    setReopened(false);
    setView("summary");
    returnFocusRef.current?.focus();
    returnFocusRef.current = null;
  };

  const choose = (prefs: ConsentPreferences) => {
    updateConsent(prefs);
    close();
  };

  const showPreferences = () => {
    setDraft(consent ? { ...consent } : allDenied);
    focusOnOpenRef.current = true;
    setView("preferences");
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "Escape") return;
    if (canDismiss) close();
    else if (view === "preferences") {
      focusOnOpenRef.current = true;
      setView("summary");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          role="dialog"
          aria-modal="false"
          aria-labelledby={headingId}
          aria-describedby={descriptionId}
          onKeyDown={onKeyDown}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-2147483646 p-3 font-DM-Sans sm:p-6"
        >
          <div className="relative mx-auto max-h-[calc(100dvh-1.5rem)] max-w-3xl overflow-y-auto rounded-3xl border-2 border-[#edd8c1] bg-white p-6 shadow-[0_20px_40px_rgba(0,0,0,0.12)] md:p-8">
            {canDismiss && (
              <button
                type="button"
                onClick={close}
                aria-label="Close cookie settings"
                className="absolute right-4 top-4 rounded-full p-2 text-[#5a2d0f] transition hover:bg-[#f9f3ef] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-100/30"
              >
                <X className="h-5 w-5" />
              </button>
            )}

            <div className="flex items-start gap-4 pr-8">
              <div className="hidden shrink-0 rounded-full border-2 border-[#e4c9b2] bg-[#f9f3ef] p-3 sm:block">
                <Cookie className="h-6 w-6 text-primary-100" aria-hidden />
              </div>
              <div>
                <h2
                  id={headingId}
                  ref={headingRef}
                  tabIndex={-1}
                  className="text-xl font-bold text-gray-900 focus:outline-none md:text-2xl"
                >
                  {view === "summary"
                    ? "We value your privacy"
                    : "Cookie preferences"}
                </h2>
                <p
                  id={descriptionId}
                  className="mt-2 text-sm leading-relaxed text-gray-600"
                >
                  {view === "summary" ? (
                    <>
                      We use strictly necessary cookies to make this website
                      work. With your permission, we&apos;d also like to use
                      cookies for live chat, analytics and marketing. You can
                      change your choice at any time from &quot;Cookie
                      settings&quot; at the bottom of every page.
                    </>
                  ) : (
                    <>
                      Choose which cookies we can use. Strictly necessary
                      cookies are always on.
                    </>
                  )}{" "}
                  <Link
                    href="/privacy-policy#cookies"
                    className="font-semibold text-primary-100 underline underline-offset-2 hover:text-[#7a3f14]"
                  >
                    Read our cookie policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            {view === "preferences" && (
              <ul className="mt-6 space-y-3">
                {categories.map(({ key, label, description }) => {
                  const switchId = `consent-${key}`;
                  const checked = key === "necessary" ? true : draft[key];
                  return (
                    <li
                      key={key}
                      className="flex items-start justify-between gap-4 rounded-xl bg-[#f9f3ef] p-4"
                    >
                      <div>
                        <label
                          htmlFor={switchId}
                          className="font-semibold text-gray-900"
                        >
                          {label}
                        </label>
                        <p
                          id={`${switchId}-description`}
                          className="mt-1 text-sm leading-relaxed text-gray-700"
                        >
                          {description}
                        </p>
                      </div>
                      <Switch.Root
                        id={switchId}
                        checked={checked}
                        disabled={key === "necessary"}
                        aria-describedby={`${switchId}-description`}
                        onCheckedChange={(value) => {
                          if (key !== "necessary") {
                            setDraft((prev) => ({ ...prev, [key]: value }));
                          }
                        }}
                        className="relative mt-1 inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors outline-none focus-visible:ring-4 focus-visible:ring-primary-100/30 disabled:cursor-not-allowed disabled:opacity-60 data-[state=checked]:bg-primary-100 data-[state=unchecked]:bg-[#d9bfa8]"
                      >
                        <Switch.Thumb className="block h-5 w-5 rounded-full bg-white shadow transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
                      </Switch.Root>
                    </li>
                  );
                })}
              </ul>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
              {view === "summary" ? (
                <>
                  <button
                    type="button"
                    onClick={showPreferences}
                    className={outlineButton}
                  >
                    Manage preferences
                  </button>
                  <button
                    type="button"
                    onClick={() => choose(allDenied)}
                    className={primaryButton}
                  >
                    Reject non-essential
                  </button>
                  <button
                    type="button"
                    onClick={() => choose(allGranted)}
                    className={primaryButton}
                  >
                    Accept all
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => choose(allDenied)}
                    className={outlineButton}
                  >
                    Reject non-essential
                  </button>
                  <button
                    type="button"
                    onClick={() => choose(allGranted)}
                    className={outlineButton}
                  >
                    Accept all
                  </button>
                  <button
                    type="button"
                    onClick={() => choose(draft)}
                    className={primaryButton}
                  >
                    Save preferences
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ConsentBanner;
