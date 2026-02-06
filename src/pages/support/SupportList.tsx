import React from "react";
const supportservices = [
  {
    title: "Financial Guidance",
    description:
      "Our experienced team offers expert guidance in budgeting and financial management, with a focus on understanding and addressing your unique needs. We work closely with you to build financial stability and help you make informed financial decisions.",
  },
  {
    title: "Access to Specialized Services",
    description:
      "Navigating the support landscape can be challenging, which is why we provide assistance in accessing specialized services related to education, health, and other critical areas. Our networking ensures you get the support you need.",
  },
  {
    title: "Maintenance Practices",
    description:
      "Fostering tenancy maintenance practices is crucial for long-term stability. We offer guidance and support in keeping your living space well-maintained, ensuring a safe and comfortable environment for all residents.",
  },
  {
    title: "Overcoming Financial Barriers",
    description:
      "Should financial indebtedness pose a barrier to accessing suitable housing, your Support Worker will collaborate with you to explore viable strategies for resolution. We are dedicated to helping you overcome obstacles and achieve financial stability.",
  },
  {
    title: "Opportunities for Growth",
    description:
      "ProVision Support is more than just a service; it's an opportunity for growth. We enable access to opportunities in employment, education/training, or voluntary service, helping you build a brighter future.",
  },
  {
    title: "Life Skills Coaching",
    description:
      " We provide tailored life skills coaching to help individuals build confidence, enhance daily living abilities, and develop practical skills that support independence — from budgeting and time management to healthy routines and goal setting.",
  },
];

const SupportList = () => {
  return (
    <div className="flex flex-col !mt-[30px] !m-auto  max-w-[350px] md:flex-row md:flex-wrap gap-[20px]  !mt-[50px]!  !mb-[30px]  lg:max-w-[1330px] md:mx-auto md:justify-center md:gap-[30px] lg:mt-[70px]!">
      {supportservices.map((supportservice, index) => (
        <div
          key={index}
          className="w-[330px] h-[300px]  rounded-[16px] !pt-3 bg-[#FD8282]/10   lg:w-[500px] lg:h-[340px]"
        >
          {/* mission container */}
          <div className="w-[296px] h-[276px] !mx-auto  !px-[16px] !py-4 bg-[white] rounded-[15px] gap-5! lg:w-[450px] lg:h-[305px]">
            {/*  */}
            <div className=" flex   ml-auto! w-[20px] h-[20px] rounded-2xl bg-[#FD8282]/10 "></div>
            <h2 className="text-[#000000] text-[14px] mb-5! lg:text-[20px]">
              {supportservice.title}
            </h2>
            <p className="text-[12px] leading-[30px] lg:text-[16px]">
              {supportservice.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupportList;
