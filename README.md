# ProVision Support Services CIC - Frontend

The Next.js + TypeScript website for ProVision Support Services CIC, providing exceptional accommodation and community support services.

## 🚀 Quick Setup

### Prerequisites

- Node.js (v20.9 or higher)
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd provision-cic-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and update the values (see [Environment Variables](#-environment-variables)).

4. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Serve the production build
- `npm run lint` - Run ESLint

## 🔑 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `API_ORIGIN` | Yes (build fails without it) | Backend origin, server-only. The browser calls same-origin `/api/v1`, which Next.js forwards here. Local: `http://localhost:4000`; Vercel: `https://provision-cic-backend.vercel.app` |
| `NEXT_PUBLIC_SITE_URL` | No | Public site URL used for canonical URLs, the sitemap and structured data. Defaults to `https://www.provisionsupportservice.co.uk` |
| `NEXT_PUBLIC_GTM_ID` | No | Google Tag Manager container ID (`GTM-XXXXXXX`). Leave empty to disable GTM |
| `NEXT_PUBLIC_GSC_VERIFICATION` | No | Google Search Console meta tag token (fallback when DNS verification is not possible) |
| `NEXT_PUBLIC_TAWK_PROPERTY_ID` | No | Tawk.to property ID (see [TAWK_SETUP.md](TAWK_SETUP.md)) |
| `NEXT_PUBLIC_TAWK_WIDGET_ID` | No | Tawk.to widget ID |

`API_ORIGIN` and the `NEXT_PUBLIC_*` values are read at build time, so set them in Vercel for both Production and Preview and redeploy after changing them.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router, statically generated) + React 19 + TypeScript
- **Styling:** Tailwind CSS 4
- **Forms:** React Hook Form + Zod validation
- **HTTP Client:** Axios
- **Animations:** Framer Motion
- **UI Components:** Radix UI, Lucide React
- **SEO:** Next.js Metadata API, sitemap, robots and JSON-LD structured data
- **Analytics & Consent:** Google Tag Manager with Consent Mode v2 and a cookie consent banner
- **Live Chat:** Tawk.to
- **Hosting:** Vercel

## 📁 Project Structure

```
src/
├── app/              # Routes (page.tsx per route), layout, sitemap, robots, OG image
├── views/            # Page components rendered by the routes
├── components/       # Reusable components
│   ├── consent/     # Cookie consent banner and hook
│   ├── navigations/ # Navbar (desktop and mobile)
│   ├── shared/      # Shared components (EventCard, JsonLd, etc.)
│   └── ui/          # UI library components
├── lib/              # Utilities and configurations (seo, consent, gtm, data)
│   └── validations/ # Form validation schemas
├── assets/           # Static assets
├── constant/         # Constants and data
└── @types/           # TypeScript type definitions
```

Each `src/app/**/page.tsx` is a small server component that exports the page metadata and renders the matching component from `src/views`.

## 🍪 Cookie Consent & Tag Manager

Analytics, marketing and live chat only run after the visitor allows them in the consent banner. Notes for setting up the GTM container are in [implementation-plan/gtm-container.md](implementation-plan/gtm-container.md).

## 🌐 Live Chat Integration

This project includes Tawk.to live chat. To set it up, see [TAWK_SETUP.md](TAWK_SETUP.md).

## 📄 License

© 2026 ProVision Support Services CIC. All rights reserved.
