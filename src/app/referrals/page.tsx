import type { Metadata } from "next";
import Referrals from "@/views/referrals/Referrals";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "Referrals";
const path = "/referrals";

export const metadata: Metadata = pageMetadata({
  title,
  description:
    "Refer someone to ProVision Support Services CIC for supported accommodation and person-centred support in Coventry. Complete our online referral form.",
  path,
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([[title, path]])} />
      <Referrals />
    </>
  );
}
