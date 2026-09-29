import type { NextConfig } from "next";

// Server-only origin of the backend API. The browser always calls the
// same-origin `/api/*`, which is forwarded here (no CORS in any environment).
const apiOrigin = process.env.API_ORIGIN?.replace(/\/+$/, "");

if (!apiOrigin) {
  throw new Error(
    "API_ORIGIN is not set. Set it to the backend origin, e.g. http://localhost:4000 locally or https://provision-cic-backend.vercel.app in Vercel.",
  );
}

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${apiOrigin}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
