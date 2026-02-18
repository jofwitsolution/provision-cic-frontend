import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JoinProvision = () => {
  return (
    <section className="relative overflow-hidden px-4 py-12 font-['DM Sans',sans-serif] md:py-20">
      {/* Decorative blur backgrounds */}
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-[#f6e4d5]/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-10 h-64 w-64 rounded-full bg-[#f2d9c2]/30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-275 overflow-hidden rounded-4xl border border-[#edd8c1] bg-linear-to-r from-[#fdf5f0] to-[#f9ebe3] px-6 py-12 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:px-12 md:py-16"
      >
        {/* Directional gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-primary-100/5 via-transparent to-transparent" />

        <motion.div
          className="relative z-20 space-y-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Main heading */}
          <div>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center rounded-full border border-[#e4c9b2] bg-[#f7ede3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#7a3f14]"
            >
              Join Us
            </motion.span>
            <h2 className="mt-4 text-2xl font-bold text-[#3f2b1d] md:text-4xl">
              Join ProVision CIC Today!
            </h2>
          </div>

          {/* Subheading */}
          <p className="mx-auto max-w-175 text-sm leading-8 text-[#2e2a28]/85 md:text-lg">
            Experience supported living that's about more than just a place—it's
            about community, meaningful support, and your journey to
            independence. Welcome home!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer rounded-2xl border border-[#edd8c1] bg-white px-6 py-2.5 font-semibold text-[#3f2b1d] shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition hover:border-primary-100 hover:shadow-[0_16px_32px_rgba(147,71,19,0.15)] md:px-8 md:py-3.5 md:text-lg"
              >
                Get in Touch
              </motion.button>
            </Link>
            <Link to="/referrals">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer rounded-2xl bg-primary-100 px-6 py-2.5 font-semibold text-white shadow-[0_12px_28px_rgba(147,71,19,0.3)] transition hover:shadow-[0_18px_40px_rgba(147,71,19,0.4)] md:px-8 md:py-3.5 md:text-lg"
              >
                Make a Referral
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JoinProvision;
