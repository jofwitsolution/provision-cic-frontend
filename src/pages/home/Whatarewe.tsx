import React from "react";
import { Link } from "react-router-dom";
import user002 from "../../assets/images//Mask group (1).png";

const Whatarewe = () => {
  return (
    <div className="mx-auto w-full max-w-[1272px] pt-[50px] font-['DM_Sans',sans-serif]">
      <h2 className="mb-1.5 text-center text-base font-semibold md:mb-3 md:text-4xl">
        Who Are We
      </h2>
      <p className="text-center text-[13px] leading-relaxed">
        Provision Support Services
      </p>
      <div className="flex gap-3 p-5 min-[1150px]:px-20 min-[1150px]:py-10">
        <div className="flex w-[55%] flex-col gap-2.5">
          <p className="text-left text-[10px] leading-[1.6] min-[480px]:text-xs md:text-base min-[1150px]:text-lg">
            At ProVision Support Services CIC, we are more than just a service
            provider; we are champions of inclusive and supported living
            experiences. Our mission is to empower individuals by connecting
            them with distinctive accommodations tailored to their unique needs
            and preferences.
          </p>
          <p className="text-left text-[10px] leading-[1.6] min-[480px]:text-xs md:text-base min-[1150px]:text-lg">
            With unwavering dedication, we unlock the full potential of property
            investments for owners, while fostering a profound sense of
            belonging, sustainability, and accessibility in every stay, no
            matter who you are, what your needs are, or how long you'll be
            staying.
          </p>
          <Link to="/support">
            <button className="mt-4 self-start rounded-[10px] border-none bg-[#934713] px-2.5 py-2.5 text-white outline-none">
              Discover More
            </button>
          </Link>
        </div>
        <div className="flex w-[45%] justify-center">
          <img
            src={user002}
            alt=""
            className="h-auto w-full max-w-[180px] md:max-w-[260px] min-[1150px]:max-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Whatarewe;
