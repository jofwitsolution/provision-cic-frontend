import supportworker from "../../assets/images/support-worker-1-f0f32ffb 1 (5).png";

const FaqHero = () => {
  return (
    <div className="relative w-full h-37.5 md:h-[40vh]!  ">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={supportworker}
        alt=""
      />
      <div className="absolute inset-0 bg-[#000000]/60 "></div>
      <div className="relative  z-1 flex  items-center justify-center h-full px-4">
        <div className=" max-w-92.5  md:max-w-250 text-white text-center ">
          <h2 className=" font-Mogra  text-[21px] mb-1.25! md:text-[60px]">
            {" "}
            Frequently Asked Questions
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FaqHero;
