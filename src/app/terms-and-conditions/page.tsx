import type { Metadata } from "next";
import TermsAndCondition from "@/views/TermsAndCondition/TermsAndCondition";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "Terms and Conditions";
const path = "/terms-and-conditions";

export const metadata: Metadata = pageMetadata({
  title,
  description:
    "The terms and conditions that govern a licensee’s occupancy of ProVision Support Services CIC accommodation, including residents’ responsibilities.",
  path,
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([[title, path]])} />
      <TermsAndCondition />
    </>
  );
}
