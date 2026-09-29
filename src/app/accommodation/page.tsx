import type { Metadata } from "next";
import Accommodation from "@/views/accommodation/Accommodation";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "Accommodation";
const path = "/accommodation";

export const metadata: Metadata = pageMetadata({
  title,
  description:
    "Well-maintained supported accommodation in Coventry, with private bedrooms, shared facilities and support staff on hand to help residents build independence.",
  path,
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([[title, path]])} />
      <Accommodation />
    </>
  );
}
