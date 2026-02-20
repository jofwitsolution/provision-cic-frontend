"use client";

import { useParams, Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { recentNews } from "../../lib/data";
import Meta from "@/components/shared/Meta";

const EventDetailsInfo = () => {
  const { slug } = useParams<{ slug?: string }>();
  const event = recentNews.find((evt) => evt.slug === slug);

  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      {!event && (
        <>
          <Meta
            title="Event Not Found - ProVision Support Services CIC"
            description="Sorry, we couldn't find the event you're looking for."
          />
          <section className="py-16 text-center font-['DM Sans',sans-serif]">
            <div className="mx-auto max-w-150 space-y-6 px-4">
              <h1 className="text-3xl font-bold text-[#3f2b1d]">
                Event Not Found
              </h1>
              <p className="text-lg text-[#2e2a28]/80">
                Sorry, we couldn't find the event you're looking for.
              </p>
              <Link to="/events" className="inline-flex">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl bg-primary-100 px-6 py-3 font-semibold text-white shadow-[0_12px_24px_rgba(147,71,19,0.25)]"
                >
                  ← Back to Events
                </motion.button>
              </Link>
            </div>
          </section>
        </>
      )}

      {event && (
        <>
          <Meta
            title={`${event.title} - ProVision Support Services CIC`}
            description={event.excerpt}
          />
          <section className="relative overflow-hidden bg-linear-to-b from-white via-[#f9f3ef] to-white py-16 font-['DM Sans',sans-serif]">
            <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-[#f6e4d5]/60 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-20 h-56 w-56 rounded-full bg-[#f2d9c2]/50 blur-3xl" />

            <motion.div
              className="relative z-10 mx-auto w-full max-w-225 px-4"
              variants={container}
              initial="show"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Back button */}
              <motion.div variants={item} className="mb-8">
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 text-primary-100 hover:text-[#7a3a0a] transition font-semibold"
                >
                  ← Back to Events
                </Link>
              </motion.div>

              {/* Header */}
              <motion.div variants={item} className="mb-12 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex rounded-full border border-[#e4c9b2] bg-[#f7ede3] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a3f14]">
                    {event.tag}
                  </span>
                  <span className="text-sm text-[#5a2d0f]">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h1 className="text-4xl font-bold leading-tight text-[#3f2b1d] md:text-5xl">
                  {event.title}
                </h1>
                <p className="text-lg leading-8 text-[#2e2a28]/85">
                  {event.excerpt}
                </p>
              </motion.div>

              {/* Main content */}
              <motion.div
                variants={item}
                className="rounded-3xl border border-[#edd8c1] bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:p-12"
              >
                <div className="prose prose-sm max-w-none md:prose-base">
                  <div className="space-y-6">
                    {event.content.split("\n\n").map((paragraph, idx) => (
                      <p key={idx} className="text-[#2e2a28] leading-8">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {event.mediaNote && (
                  <div className="mt-10 rounded-2xl border border-[#edd8c1] bg-[#f9f3ef] p-6">
                    <p className="text-sm text-[#5a2d0f]">
                      <span className="font-semibold">📸 Media Note:</span>{" "}
                      {event.mediaNote}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Gallery */}
              {event.otherImages && event.otherImages.length > 0 && (
                <motion.div variants={item} className="mt-12">
                  <h2 className="mb-8 text-2xl font-bold text-[#3f2b1d]">
                    Event Highlights
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {event.otherImages.map((image, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="overflow-hidden rounded-2xl shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
                      >
                        <motion.img
                          src={image}
                          alt={`Event highlight ${idx + 1}`}
                          className="h-64 w-full object-cover md:h-72"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* CTA */}
              <motion.div
                variants={item}
                className="mt-16 rounded-3xl border border-[#edd8c1] bg-linear-to-r from-primary-100 to-[#7a3a0a] p-10 text-center text-white"
              >
                <h3 className="mb-4 text-2xl font-bold">{event.title}</h3>
                <p className="mb-6 mx-auto max-w-150 leading-8">
                  Have questions about this event/news or want to get more
                  information? Get in touch with our team.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-2xl bg-white px-8 py-3 font-semibold text-primary-100 shadow-[0_12px_24px_rgba(0,0,0,0.15)] transition hover:shadow-[0_16px_32px_rgba(0,0,0,0.2)]"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </section>
        </>
      )}
    </>
  );
};

export default EventDetailsInfo;
