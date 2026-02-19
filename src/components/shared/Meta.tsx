import { Helmet } from "react-helmet";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  siteName?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
}

const Meta = ({
  title = "ProVision Support Services CIC",
  description = "ProVision Support Services CIC is dedicated to providing exceptional accommodation and support services. We specialize in sustainable accommodations that empower individuals and communities. Explore our range of services and discover how we can assist you in finding the perfect property solution.",
  keywords = "provision, ProVision Support Services CIC, property, support service, accommodation, community support",
  author = "ProVision Support Services CIC",
  image = "/img/primary-logo.png",
  url = typeof window !== "undefined" ? window.location.href : "",
  type = "website",
  siteName = "ProVision Support Services CIC",
  twitterCard = "summary_large_image",
}: MetaProps) => {
  const fullTitle = title.includes("ProVision")
    ? title
    : `${title} | ProVision Support Services CIC`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Meta;
