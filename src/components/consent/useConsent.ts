"use client";

import { useSyncExternalStore } from "react";
import {
  parseConsent,
  readConsentCookie,
  saveConsent,
  type ConsentPreferences,
  type StoredConsent,
} from "@/lib/consent";

const listeners = new Set<() => void>();

let cachedRaw: string | null | undefined;
let cachedConsent: StoredConsent | null = null;

// Parse only when the cookie changes, so the snapshot stays stable.
function getSnapshot() {
  const raw = readConsentCookie();
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedConsent = parseConsent(raw);
  }
  return cachedConsent;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function updateConsent(prefs: ConsentPreferences) {
  saveConsent(prefs);
  listeners.forEach((listener) => listener());
}

// undefined while rendering on the server or hydrating (unknown yet),
// null when the visitor hasn't chosen, otherwise their stored choice.
export function useConsent(): StoredConsent | null | undefined {
  return useSyncExternalStore(subscribe, getSnapshot, () => undefined);
}
