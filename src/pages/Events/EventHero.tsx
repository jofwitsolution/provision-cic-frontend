import { Link } from "react-router-dom";
import supportworker from "../../assets/images/support-worker-1-f0f32ffb 1 (6).png";

const EventHero = () => {
  return (
    <div className="relative w-full h-[293px]  md:!h-[85vh]  ">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={supportworker}
        alt=""
      />
      <div className="absolute inset-0 bg-[#934713]/60 "></div>
      <div className="relative  z-1 flex  items-center justify-center h-full px-4">
        <div className=" max-w-[370px]  md:max-w-[1000px] text-white text-center ">
          <h2 className=" font-Mogra  text-[21px] !mb-[5px] md:text-[60px]">
            {" "}
            Latest Events
          </h2>{" "}
          <p className=" font-[DM Sans] text-[10px] md:text-[25px]">
            Explore our recent events that highlight our commitment to community
            engagement and support services. From workshops to social
            gatherings, stay informed about how we make a difference together.
          </p>
          <div className="flex gap-2 justify-center !mt-2.5">
            <Link to="/events">
              <button className="   h-[33px] w-[93px] px-[17px] py[8px]   bg-white text-[#934713]  rounded-md text-[9.53px] md:h-[85px] md:w-[241px] md:text-[25px]  md:px-[45px] d:py-[22.5px]  ">
                Check Latest Events
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
