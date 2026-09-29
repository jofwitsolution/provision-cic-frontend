import Image from "next/image";
import supportworker from "../../assets/images/hero-terms.png";

const PrivacyPolicyHero = () => {
  return (
    <div className="relative w-full h-[150px] md:!h-[40vh]  ">
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src={supportworker}
        alt=""
        sizes="100vw"
        preload
      />
      <div className="absolute inset-0 bg-[#000000]/60 "></div>
      <div className="relative  z-1 flex  items-center justify-center h-full px-4">
        <div className=" max-w-[370px]  md:max-w-[1000px] text-white text-center ">
          <h1 className=" font-Mogra  text-[21px] !mb-[5px] md:text-[60px]">
            {" "}
            Terms & Conditions
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyHero;
