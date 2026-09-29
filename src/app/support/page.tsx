import type { Metadata } from "next";
import Support from "@/views/support/Support";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "Support Services";
const path = "/support";

export const metadata: Metadata = pageMetadata({
  title,
  description:
    "Person-centred support with budgeting, benefits, tenancy, wellbeing, employment, training and community integration from ProVision Support Services CIC.",
  path,
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([[title, path]])} />
      <Support />
    </>
  );
}
