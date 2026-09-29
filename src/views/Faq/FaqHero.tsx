import Image from "next/image";
import supportworker from "../../assets/images/hero-faq-privacy.png";

const FaqHero = () => {
  return (
    <div className="relative w-full h-37.5 md:h-[40vh]!  ">
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src={supportworker}
        alt=""
        sizes="100vw"
        preload
      />
      <div className="absolute inset-0 bg-[#000000]/60 "></div>
      <div className="relative  z-1 flex  items-center justify-center h-full px-4">
        <div className=" max-w-92.5  md:max-w-250 text-white text-center ">
          <h1 className=" font-Mogra  text-[21px] mb-1.25! md:text-[60px]">
            {" "}
            Frequently Asked Questions
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FaqHero;
