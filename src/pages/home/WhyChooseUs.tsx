import { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "Personalised Support Plans",
    content:
      "We tailor support plans to each individual's unique needs and aspirations, ensuring your journey is truly your own.",
    icon: "🎯",
  },
  {
    title: "Expert Financial Guidance",
    content:
      "Our team provides expert financial guidance to promote independence and help you achieve your goals.",
    icon: "💼",
  },
  {
    title: "Access to Specialised Services",
    content:
      "We connect you with trusted specialist services whenever you need them.",
    icon: "🤝",
  },
  {
    title: "Pathway to Independence",
    content:
      "We empower individuals on their journey to independent living with consistent, compassionate support.",
    icon: "🌟",
  },
];

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f9f3ef_60%)] py-14 font-['DM_Sans',sans-serif] md:py-20">
      <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#f6e4d5]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#f2d9c2]/60 blur-3xl" />

      <motion.div
        className="mx-auto w-full max-w-300 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={item}
          className="mx-auto mb-12 max-w-190 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#e4c9b2] bg-[#f7ede3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a3f14]">
            The ProVision Difference
          </span>
          <h2 className="mt-4 text-2xl font-semibold text-[#3f2b1d] md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#3f2b1d]/80 md:text-base">
            Our personalised care, commitment to your goals, and proven pathway
            to independence set us apart. You're not just a resident — you're on
            a journey towards self-sufficiency and well-being.
          </p>
        </motion.div>

        <motion.div variants={item} className="grid gap-3 md:grid-cols-2">
          {items.map((accordion, index) => (
            <div key={index} className="flex flex-col">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className={`flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left transition md:px-6 md:py-5 ${
                  openIndex === index
                    ? "border-primary-100 bg-primary-100 text-white shadow-[0_18px_35px_rgba(147,71,19,0.25)]"
                    : "border-[#edd8c1] bg-white text-[#3f2b1d] hover:border-primary-100/50 hover:shadow-[0_12px_24px_rgba(147,71,19,0.12)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{accordion.icon}</span>
                  <h3 className="font-semibold">{accordion.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-lg"
                >
                  ▼
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-b-2xl border border-t-0 border-[#edd8c1] bg-[#f9f3ef] px-5 py-4 md:px-6 md:py-5">
                      <p className="leading-7 text-[#2e2a28]">
                        {accordion.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
