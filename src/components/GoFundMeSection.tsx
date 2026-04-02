import { goFundMeLink } from "@/lib/routes";
import { motion } from "framer-motion";

const impacts = [
  {
    stat: "£25",
    label:
      "Covers a week of essential toiletries and hygiene supplies for a resident",
  },
  {
    stat: "£50",
    label: "Helps fund a one-to-one life-skills coaching session",
  },
  {
    stat: "£100",
    label:
      "Contributes toward a month of utilities for a supported living space",
  },
];

const GoFundMeSection = () => {
  return (
    <section className="relative overflow-hidden py-16 font-['DM_Sans',sans-serif] md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(147,71,19,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(242,217,194,0.35),transparent_60%)]" />

      {/* Decorative blurs */}
      <div className="pointer-events-none absolute -left-16 top-8 h-52 w-52 rounded-full bg-[#f6e4d5]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-8 h-60 w-60 rounded-full bg-[#f2d9c2]/50 blur-3xl" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-275 px-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        {/* Card */}
        <div className="overflow-hidden rounded-4xl border border-[#edd8c1] bg-white shadow-[0_24px_48px_rgba(0,0,0,0.09)]">
          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-linear-to-r from-[#c2622a] via-primary-100 to-[#e8a06a]" />

          <div className="grid gap-10 px-6 py-12 md:grid-cols-2 md:items-center md:gap-16 md:px-14 md:py-16">
            {/* Left — copy */}
            <motion.div
              className="flex flex-col gap-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <span className="inline-flex w-fit items-center rounded-full border border-[#e4c9b2] bg-[#f7ede3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a3f14]">
                Support Our Mission
              </span>

              <h2 className="text-2xl font-bold leading-snug text-[#3f2b1d] md:text-4xl">
                Help Us Give People a{" "}
                <span className="text-primary-100">Place to Call Home</span>
              </h2>

              <p className="text-sm leading-8 text-[#2e2a28]/80 md:text-base">
                ProVision Support Services CIC is a not-for-profit community
                interest company. Every donation goes directly toward providing
                safe accommodation, person-centred support, and life-skills
                coaching to individuals who need it most. Your generosity helps
                us keep doors open for the most vulnerable in our community.
              </p>

              <p className="text-sm leading-7 text-[#2e2a28]/70 md:text-[15px]">
                Whether you give once or regularly, your contribution funds
                real, lasting change — from a warm bed tonight to an independent
                future tomorrow.
              </p>

              <motion.a
                href={goFundMeLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-2xl bg-primary-100 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(147,71,19,0.30)] transition hover:shadow-[0_18px_40px_rgba(147,71,19,0.40)] md:text-base"
              >
                {/* GoFundMe heart icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                Donate on GoFundMe
              </motion.a>
            </motion.div>

            {/* Right — impact highlights */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a3f14]">
                Your donation in action
              </p>
              <div className="flex flex-col gap-3">
                {impacts.map((item, i) => (
                  <motion.div
                    key={item.stat}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: 0.25 + i * 0.08 }}
                    className="flex items-start gap-4 rounded-2xl border border-[#edd8c1] bg-[#fdf8f4] px-5 py-4"
                  >
                    <span className="shrink-0 rounded-xl bg-primary-100/10 px-3 py-2 text-lg font-bold text-primary-100">
                      {item.stat}
                    </span>
                    <p className="text-sm leading-6 text-[#2e2a28]/80">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Trust badge */}
              <div className="mt-2 flex items-center gap-2 rounded-2xl border border-[#edd8c1] bg-[#f7ede3] px-5 py-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0 text-primary-100"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-xs leading-5 text-[#5a2d0f]">
                  All donations are processed securely through GoFundMe.
                  ProVision CIC is a registered community interest company.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GoFundMeSection;
