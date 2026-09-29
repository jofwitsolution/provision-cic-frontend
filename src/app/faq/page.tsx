import type { Metadata } from "next";
import Faq from "@/views/Faq/Faq";
import JsonLd from "@/components/shared/JsonLd";
import { faqs } from "@/lib/data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "FAQ";
const path = "/faq";

export const metadata: Metadata = pageMetadata({
  title,
  description:
    "Answers to common questions about ProVision Support Services CIC: our supported accommodation, the support we offer, how to request help and what happens next.",
  path,
});

// Built from the same data the accordion renders.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={[faqJsonLd, breadcrumbJsonLd([["FAQ", path]])]} />
      <Faq />
    </>
  );
}
