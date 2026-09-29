import type { Metadata } from "next";
import Home from "@/views/home/Home";
import {
  baseOpenGraph,
  defaultDescription,
  defaultTitle,
  siteName,
  siteUrl,
} from "@/lib/seo";
import JsonLd from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: { absolute: defaultTitle },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    ...baseOpenGraph,
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  inLanguage: "en-GB",
};

export default function Page() {
  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <Home />
    </>
  );
}
