import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "2025 Christmas Celebration",
    text: "A joyful and memorable Christmas 2025 celebration filled with laughter, togetherness, and community spirit, as residents, staff, and supporters came together to mark the festive season.",
  },
  {
    id: 2,
    title: "Amber Weather Warning — Important",
    text: " An amber weather warning has been issued for the West Midlands due to the potential impact of heavy snowfall, strong winds, and cold conditions between January 8 and January 12, 2026.",
  },
  {
    id: 3,
    title: "Community Wellbeing Workshop",
    text: "Join us for a free Community Wellbeing Workshop designed to support individuals and families with practical resources, wellbeing tips, and local support information.",
  },
];

const LatestEvents = () => {
  return (
    <section className="margin-top-13 font-DM-Sans m-auto">
      <h2 className="text-center text-[8px] mt-10 md:text-[20px]">
        Latest Events
      </h2>
      <p className=" text-center mb-5">See updates and upcoming events</p>

      <div className=" !m-auto grid gap-[12px] max-w-[370px] md:grid-cols-3 md:max-w-[700px] lg:max-w-[1100px] ">
        {events.map((event) => (
          <div
            className="relative bg-[#1d1836] mx-auto! text-[#f7f7f7] px-7.5! py-7.5! rounded-[10px] lg:max-w-87.5"
            key={event.id}
          >
            <h3 className="!mb-[10px]">{event.title}</h3>
            <p className=" text-[16px] !mb-[56px]">{event.text}</p>
            <div className=" absolute right-[30px] bottom-[30px] ">
              <NavLink to={`/events/${event.id}`}>
                <Button text="Learn More" />
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestEvents;
