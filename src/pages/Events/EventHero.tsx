import { motion } from "framer-motion";
import supportworker from "../../assets/images/support-worker-1-f0f32ffb 1 (6).png";

const EventHero = () => {
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
          Latest Events
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-['DM Sans'] text-sm leading-relaxed text-white/90 md:text-xl"
        >
          Explore our recent events that highlight our commitment to community
          engagement and support services. From workshops to social gatherings,
          stay informed about how we make a difference together.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default EventHero;
