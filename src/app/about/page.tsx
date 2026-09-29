import type { Metadata } from "next";
import About from "@/views/about/About";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "About Us";
const path = "/about";

export const metadata: Metadata = pageMetadata({
  title,
  description:
    "ProVision Support Services CIC provides inclusive, person-centred supported living in Coventry, helping people live safely, independently and with dignity.",
  path,
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([[title, path]])} />
      <About />
    </>
  );
}
