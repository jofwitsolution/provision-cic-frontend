import { motion, type Variants } from "framer-motion";
import { NavLink } from "react-router-dom";
import Button from "../Button";

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const tagColors = {
  Celebration: "bg-[#fef3c7] text-[#92400e]",
  Alert: "bg-[#fee2e2] text-[#991b1b]",
  Workshop: "bg-[#dbeafe] text-[#1e40af]",
};

const EventCard = ({ event }: { event: EventType }) => {
  return (
    <motion.article
      key={event.id}
      variants={item}
      className="group flex h-full flex-col rounded-3xl border border-[#edd8c1] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition hover:border-primary-100/40 hover:shadow-[0_20px_40px_rgba(147,71,19,0.15)] md:p-8"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-tight text-[#3f2b1d]">
            {event.title}
          </h3>
        </div>
        <div
          className={`rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${
            tagColors[event.tag as keyof typeof tagColors] ||
            "bg-[#e5e7eb] text-[#374151]"
          }`}
        >
          {event.tag}
        </div>
      </div>

      <p className="mb-6 flex-1 text-sm leading-7 text-[#2e2a28]">
        {event.excerpt}
      </p>

      <div className="flex">
        <NavLink to={`/events/${event.slug}`}>
          <Button text="Read More" />
        </NavLink>
      </div>
    </motion.article>
  );
};

export default EventCard;
