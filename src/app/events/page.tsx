import type { Metadata } from "next";
import Event from "@/views/Events/Event";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "Events & News";
const path = "/events";

export const metadata: Metadata = pageMetadata({
  title,
  description:
    "Events, news and notices from ProVision Support Services CIC, including community celebrations, resident updates and supported accommodation openings in Coventry.",
  path,
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([[title, path]])} />
      <Event />
    </>
  );
}
