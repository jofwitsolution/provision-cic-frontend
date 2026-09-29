import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Mogra } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
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
      <body>
        <JsonLd data={organizationJsonLd} />
        {children}
        <Toaster position="top-right" />

        {/* Tawk.to Live Chat Widget */}
        {tawkPropertyId && tawkWidgetId && (
          <TawkTo propertyId={tawkPropertyId} widgetId={tawkWidgetId} />
        )}
      </body>
    </html>
  );
}
