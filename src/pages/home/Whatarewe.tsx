import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import user002 from "../../assets/images//Mask group (1).png";

const Whatarewe = () => {
  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(147,71,19,0.08),transparent_55%)] py-14 font-['DM_Sans',sans-serif] md:py-20">
      <div className="pointer-events-none absolute -left-20 top-12 h-48 w-48 rounded-full bg-[#f5e7db] blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-4 h-56 w-56 rounded-full bg-[#f2d9c2] blur-3xl" />

      <motion.div
        className="mx-auto w-full max-w-300 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={item}
          className="mx-auto mb-10 max-w-190 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#e4c9b2] bg-[#f7ede3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a3f14]">
            Provision Support Services
          </span>
          <h2 className="mt-4 text-2xl font-semibold text-[#3f2b1d] md:text-4xl">
            Who Are We
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#3f2b1d]/80 md:text-base">
            We are a community-led CIC creating supported living experiences
            that feel personal, secure, and empowering for every resident.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={item} className="space-y-5">
            <p className="text-sm leading-7 text-[#2e2a28] md:text-base">
              At ProVision Support Services CIC, we are more than just a service
              provider; we are champions of inclusive and supported living
              experiences. Our mission is to empower individuals by connecting
              them with distinctive accommodations tailored to their unique
              needs and preferences.
            </p>
            <p className="text-sm leading-7 text-[#2e2a28] md:text-base">
              With unwavering dedication, we unlock the full potential of
              property investments for owners, while fostering a profound sense
              of belonging, sustainability, and accessibility in every stay.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Person-first care plans",
                "Accessible, safe homes",
                "Partnered specialist support",
                "Owner value maximised",
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[#eedfcc] bg-white/80 px-4 py-3 text-sm font-medium text-[#5a2d0f] shadow-[0_12px_24px_rgba(147,71,19,0.12)]"
                >
                  {label}
                </div>
              ))}
            </div>

            <Link to="/support" className="inline-flex">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 inline-flex items-center gap-2 rounded-2xl bg-primary-100 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_32px_rgba(147,71,19,0.28)] transition"
              >
                Discover More
                <span className="text-lg">→</span>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-90"
          >
            <div className="absolute -left-6 top-6 h-full w-full rounded-[32px] border border-[#efd9c2] bg-[#f9efe6]" />
            <div className="relative overflow-hidden rounded-[28px] border border-[#f1dcc7] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <img
                src={user002}
                alt="Provision team member"
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Whatarewe;
