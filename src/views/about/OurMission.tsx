const OurMission = () => {
  return (
    <div>
      <div className="flex flex-col mt-[60px]! m-auto! max-w-[400px] md:max-w-[1279px] ">
        <h2 className="text-center max-w-75 m-auto! leading-[100%] mb-7.5! text-[28px] lg:text-[40px]  lg:max-w-300">
          Our Mission & Vision Statement
        </h2>
        <div className="flex flex-col gap-[48px] m-auto! mb-8! max-w-[330px] lg:max-w-[1279px] lg:flex-row lg:gap-[42px] ">
          {/*  */}
          {/* statements-container  */}
          <div className="w-[330px] h-[280px]  rounded-[16px] py-4! bg-[#000000]/5   lg:w-[500px] lg:h-[320px]">
            {/*  */}

            {/* mission container */}
            <div className="w-[296px] h-[256px] !mx-auto  px-[16px]! py-4! bg-[white] rounded-[15px] gap-5! lg:w-[450px] lg:h-[285px]">
              {/*  */}
              <div className=" flex   ml-auto! w-[20px] h-[20px] rounded-2xl bg-[#000000]/5 "></div>
              <h2 className="text-[#934713] text-[20px] mb-5! lg:text-[30px]">
                {" "}
                Our Mission
              </h2>
              <p className="text-[13px] leading-[30px] lg:text-[20px]">
                To provide person-centred support that helps people live
                independently, safely and with dignity, and to build the
                connections that make that independence last.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="w-[330px] h-[280px]  rounded-[16px] !pt-3 bg-[#000000]/5   lg:w-[500px] lg:h-[320px]">
            {/*  */}
            {/* mission container */}
            <div className="w-[296px] h-[256px] !mx-auto  px-[16px]! py-4! bg-[white] rounded-[15px] gap-5! lg:w-[450px] lg:h-[285px]">
              {/*  */}
              <div className=" flex   ml-auto! w-[20px] h-[20px] rounded-2xl bg-[#000000]/5 "></div>
              <h2 className="text-[#934713] text-[20px] mb-5! lg:text-[30px]">
                Our Vision
              </h2>
              <p className="text-[13px] leading-[30px] lg:text-[20px]">
                A Coventry where everyone has a secure home, the support they
                need to keep it, and a genuine route to living independently.
              </p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
