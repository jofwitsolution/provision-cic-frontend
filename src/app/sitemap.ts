import type { MetadataRoute } from "next";
import { recentNews } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/about",
  "/accommodation",
  "/support",
  "/events",
  "/referrals",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path) => ({ url: absoluteUrl(path) })),
    ...recentNews.map((event) => ({
      url: absoluteUrl(`/events/${event.slug}`),
      lastModified: event.date,
    })),
  ];
}
