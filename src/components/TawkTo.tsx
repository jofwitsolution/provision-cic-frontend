"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useConsent } from "@/components/consent/useConsent";

interface TawkToProps {
  propertyId: string;
  widgetId: string;
}

const TawkTo = ({ propertyId, widgetId }: TawkToProps) => {
  const consent = useConsent();

  // The embed script expects these globals to exist before it loads.
  // lazyOnload injects the script after window load, so this runs first.
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = window.Tawk_LoadStart || new Date();
  }, []);

  // A loaded widget can't be unloaded, so hide it if consent is withdrawn.
  const allowed = consent?.functional === true;
  useEffect(() => {
    if (allowed) window.Tawk_API?.showWidget?.();
    else window.Tawk_API?.hideWidget?.();
  }, [allowed]);

  // Tawk.to sets cookies as soon as it loads, so it needs live chat consent.
  if (!allowed) return null;

  return (
    <Script
      id="tawk-to"
      src={`https://embed.tawk.to/${propertyId}/${widgetId}`}
      strategy="lazyOnload"
      crossOrigin="anonymous"
    />
  );
};

export default TawkTo;
