import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navigations/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Sorry, we couldn't find the page you're looking for.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="py-16 text-center font-DM-Sans">
        <div className="mx-auto max-w-150 space-y-6 px-4">
          <h1 className="text-3xl font-bold text-[#3f2b1d]">Page Not Found</h1>
          <p className="text-lg text-[#2e2a28]/80">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="inline-flex rounded-2xl bg-primary-100 px-6 py-3 font-semibold text-white shadow-[0_12px_24px_rgba(147,71,19,0.25)] transition hover:-translate-y-0.5"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
