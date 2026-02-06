import { NavLink } from "react-router-dom";
import { events } from "../../../data";
import Button from "@/components/Button";

const EventItems = () => {
  return (
    <section className="mt-13 font-DM-Sans">
      <h3 className="!m-auto text-center text-[18px] md:text-[25px] !mb-[30px]">
        Stay Updated with Our Latest Events
      </h3>
      <div className=" !m-auto  grid   gap-[12px]  max-w-[370px] md:grid-cols-3 md:max-w-[700px]  lg:max-w-[1100px] ">
        {events.map((event) => (
          <div
            className="  relative bg-[#1d1836] !mx-auto text-[#f7f7f7] !px-[30px] !py-[30px]  rounded-[10px] lg:max-w-[350px]"
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

export default EventItems;
