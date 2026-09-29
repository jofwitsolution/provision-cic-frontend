import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Mogra } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/sonner";
import ConsentBanner from "@/components/consent/ConsentBanner";
import TawkTo from "@/components/TawkTo";
import JsonLd from "@/components/shared/JsonLd";
import {
  baseOpenGraph,
  defaultDescription,
  defaultTitle,
  organizationJsonLd,
  siteName,
  siteUrl,
} from "@/lib/seo";
import { consentModeScript } from "@/lib/consent";
import "../index.css";
import "../App.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const mogra = Mogra({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mogra",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-dm-sans",
});

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "ProVision Support Services CIC",
    "supported accommodation Coventry",
    "supported living",
    "housing support",
    "tenancy support",
    "referrals",
  ],
  authors: [{ name: siteName }],
  openGraph: {
    ...baseOpenGraph,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(gscVerification && { verification: { google: gscVerification } }),
};

const tawkPropertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
const tawkWidgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${bebasNeue.variable} ${mogra.variable} ${dmSans.variable}`}
    >
      <head>
        {/* Consent Mode defaults must be set before Tag Manager loads */}
        <script
          id="consent-mode"
          dangerouslySetInnerHTML={{ __html: consentModeScript() }}
        />
      </head>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body>
        <JsonLd data={organizationJsonLd} />
        <ConsentBanner />
        {children}
        <Toaster position="top-right" />

        {/* Tawk.to Live Chat Widget (loads once live chat is allowed) */}
        {tawkPropertyId && tawkWidgetId && (
          <TawkTo propertyId={tawkPropertyId} widgetId={tawkWidgetId} />
        )}
      </body>
    </html>
  );
}
