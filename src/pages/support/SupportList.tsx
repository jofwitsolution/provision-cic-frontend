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
    <div className="flex flex-col mt-7.5! m-auto!  max-w-87.5 md:flex-row md:flex-wrap gap-5 mb-7.5!  lg:max-w-332.5 md:mx-auto md:justify-center md:gap-7.5 lg:mt-17.5!">
      {supportservices.map((supportservice, index) => (
        <div
          key={index}
          className="w-82.5 h-75  rounded-3xl pt-3! bg-[#f2d9c2]/10   lg:w-125 lg:h-85"
        >
          {/* mission container */}
          <div className="w-74 h-69 mx-auto!  px-4! py-4! bg-[white] rounded-[15px] gap-5! lg:w-112.5 lg:h-76.25">
            {/*  */}
            <div className=" flex   ml-auto! w-5 h-5 rounded-2xl bg-primary-100/10 "></div>
            <h2 className="text-[#000000] text-[14px] mb-5! lg:text-[20px]">
              {supportservice.title}
            </h2>
            <p className="text-[12px] leading-7.5 lg:text-[16px]">
              {supportservice.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupportList;
