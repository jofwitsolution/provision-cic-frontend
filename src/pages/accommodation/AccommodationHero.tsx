import { Link } from "react-router-dom";
import supportworker from "../../assets/images/support-worker-1-f0f32ffb 1 (1).png";
import { motion } from "framer-motion";

const AccommodationHero = () => {
  return (
    <section className="relative isolate flex min-h-80 items-center justify-center overflow-hidden bg-black/20 md:min-h-[80vh]">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={supportworker}
        alt="Provision support worker"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-[#421e0c]/70 to-[#120703]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center text-white md:px-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-Mogra text-3xl leading-tight md:text-6xl"
        >
          Accommodation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-['DM Sans'] text-sm leading-relaxed text-white/90 md:text-xl"
        >
          We take great pride in offering distinctive and well-maintained
          accommodations that cater to a diverse range of needs and preferences.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 text-xs md:text-base">
          <Link to="/contact">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer rounded-2xl bg-white/90 px-6 py-2 font-semibold text-primary-100 shadow-[0_15px_30px_rgba(0,0,0,0.25)] md:px-10 md:py-4"
            >
              Get in Touch
            </motion.button>
          </Link>
          <Link to="/referrals">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer rounded-2xl border border-white/60 px-6 py-2 font-semibold text-white md:px-10 md:py-4"
            >
              Refer Someone
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default AccommodationHero;
