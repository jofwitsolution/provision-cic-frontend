import type { Metadata } from "next";
import PrivacyPolicy from "@/views/PrivacyPolicy/PrivacyPolicy";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "Privacy Policy";
const path = "/privacy-policy";

export const metadata: Metadata = pageMetadata({
  title,
  description:
    "How ProVision Support Services CIC collects, uses and protects your personal data in line with GDPR, and how to exercise your data protection rights.",
  path,
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([[title, path]])} />
      <PrivacyPolicy />
    </>
  );
}
