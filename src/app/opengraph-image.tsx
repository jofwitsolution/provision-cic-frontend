import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteName } from "@/lib/seo";

export const alt = `${siteName}: supported accommodation in Coventry`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default share image for every page without its own; generated at build time.
export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "src/assets/primary-logo-large.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(180deg, #ffffff 0%, #f9f3ef 55%, #f5ede4 100%)",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 56,
            padding: "0 80px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={338} height={210} alt="" />
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                fontSize: 58,
                lineHeight: 1.1,
                color: "#3f2b1d",
              }}
            >
              Supported accommodation in Coventry
            </div>
            <div style={{ fontSize: 30, lineHeight: 1.4, color: "#5a2d0f" }}>
              Person-centred support toward independent living.
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 96,
            padding: "0 80px",
            background: "#934713",
            color: "#ffffff",
            fontSize: 28,
          }}
        >
          <div style={{ display: "flex" }}>{siteName}</div>
          <div style={{ display: "flex" }}>provisionsupportservice.co.uk</div>
        </div>
      </div>
    ),
    size,
  );
}
