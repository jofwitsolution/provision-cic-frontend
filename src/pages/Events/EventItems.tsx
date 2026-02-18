import EventCard from "@/components/shared/EventCard";
import { recentNews } from "../../lib/data";

const EventItems = () => {
  return (
    <section className="mt-13 font-DM-Sans">
      <h3 className="m-auto! text-center text-[18px] md:text-[25px] mb-7.5!">
        Stay Updated with Our Latest Events
      </h3>
      <div className="m-auto! grid gap-3  max-w-92.5 md:grid-cols-3 md:max-w-175  lg:max-w-275">
        {recentNews.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventItems;
