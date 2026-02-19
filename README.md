# ProVision Support Services CIC - Frontend

A modern React + TypeScript website for ProVision Support Services CIC, providing exceptional accommodation and community support services.

## 🚀 Quick Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

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

   Edit `.env` and update the values:
   - API URL configuration
   - Tawk.to live chat credentials (see [TAWK_SETUP.md](TAWK_SETUP.md))

4. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Routing:** React Router DOM
- **Forms:** React Hook Form + Zod validation
- **HTTP Client:** Axios
- **Animations:** Framer Motion
- **UI Components:** Radix UI, Lucide React
- **SEO:** React Helmet
- **Live Chat:** Tawk.to

## 📁 Project Structure

```
src/
├── components/       # Reusable components
│   ├── shared/      # Shared components (Meta, EventCard, etc.)
│   └── ui/          # UI library components
├── pages/           # Page components
├── lib/             # Utilities and configurations
│   └── validations/ # Form validation schemas
├── assets/          # Static assets
├── constant/        # Constants and data
└── @types/          # TypeScript type definitions
```

## 🌐 Live Chat Integration

This project includes Tawk.to live chat. To set it up, see [TAWK_SETUP.md](TAWK_SETUP.md).

## 📄 License

© 2026 ProVision Support Services CIC. All rights reserved.
