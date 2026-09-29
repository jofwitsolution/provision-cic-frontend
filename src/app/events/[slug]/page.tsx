import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventDetails from "@/views/EventDetails/EventDetails";
import JsonLd from "@/components/shared/JsonLd";
import { recentNews } from "@/lib/data";
import {
  absoluteUrl,
  baseOpenGraph,
  breadcrumbJsonLd,
  organizationId,
  siteName,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return recentNews.map((event) => ({ slug: event.slug }));
}

const findEvent = (slug: string) => recentNews.find((evt) => evt.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = findEvent(slug);
  if (!event) return {};

  const path = `/events/${event.slug}`;
  const fullTitle = `${event.title} | ${siteName}`;
  const image = event.otherImages[0];

  return {
    title: event.title,
    description: event.excerpt,
    alternates: { canonical: path },
    openGraph: {
      ...baseOpenGraph,
      type: "article",
      title: fullTitle,
      description: event.excerpt,
      url: path,
      publishedTime: event.date,
      section: event.category,
      // Events without photos fall back to the default Open Graph image.
      ...(image && {
        images: [
          {
            url: image.src,
            width: image.width,
            height: image.height,
            alt: event.title,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: event.excerpt,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const event = findEvent(slug);
  if (!event) notFound();

  const path = `/events/${event.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: event.title,
    description: event.excerpt,
    articleSection: event.category,
    datePublished: event.date,
    mainEntityOfPage: absoluteUrl(path),
    ...(event.otherImages.length > 0 && {
      image: event.otherImages.slice(0, 3).map((img) => absoluteUrl(img.src)),
    }),
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
  };

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd,
          breadcrumbJsonLd([
            ["Events & News", "/events"],
            [event.title, path],
          ]),
        ]}
      />
      <EventDetails slug={slug} />
    </>
  );
}
