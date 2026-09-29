"use client";

import { useEffect } from "react";
import Script from "next/script";

interface TawkToProps {
  propertyId: string;
  widgetId: string;
}

const TawkTo = ({ propertyId, widgetId }: TawkToProps) => {
  // The embed script expects these globals to exist before it loads.
  // lazyOnload injects the script after window load, so this runs first.
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = window.Tawk_LoadStart || new Date();
  }, []);

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
