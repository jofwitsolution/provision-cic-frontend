type EventType = {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  otherImages?: import("next/image").StaticImageData[];
  category: string;
  mediaNote?: string;
  videos?: string[];
  tag: string;
};
