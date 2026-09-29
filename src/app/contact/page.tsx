import type { Metadata } from "next";
import Contact from "@/views/contact/Contact";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "Contact Us";
const path = "/contact";

export const metadata: Metadata = pageMetadata({
  title,
  description:
    "Get in touch with ProVision Support Services CIC by phone, email or our contact form. Our team is available Monday to Friday, 8:00am to 5:30pm.",
  path,
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([[title, path]])} />
      <Contact />
    </>
  );
}
