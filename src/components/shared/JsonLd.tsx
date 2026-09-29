type JsonLdProps = { data: Record<string, unknown> | Record<string, unknown>[] };

// Renders structured data into the server HTML. `<` is escaped so that
// content can never close the script tag.
const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    }}
  />
);

export default JsonLd;
