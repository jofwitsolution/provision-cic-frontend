import { motion, type Variants } from "framer-motion";
import EventCard from "@/components/shared/EventCard";
import { recentNews } from "@/lib/data";

const LatestEvents = () => {
  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-14 font-DM-Sans md:py-20">
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
            In the Community
          </span>
          <h2 className="mt-4 text-2xl font-semibold text-[#3f2b1d] md:text-4xl">
            Latest Events
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#3f2b1d]/80 md:text-base">
            Stay updated with our latest events, workshops, and community
            updates
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentNews.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LatestEvents;
