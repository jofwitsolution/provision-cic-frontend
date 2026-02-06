const coreValues = [
  {
    id: 1,
    title: "Needs to Client-Centric",
    content:
      "Prioritising the comfort and satisfaction of our clients, going above and beyond to meet their needs and create unforgettable memories.",
  },
  {
    id: 2,
    title: "Transparent Partnership",
    content:
      "Believing in transparent and mutually beneficial partnerships with property owners, ensuring they also benefit from our services. After all no client no service for us.",
  },
  {
    id: 3,
    title: "Continuous Improvement",
    content:
      "Dedication to continuous learning and improvement, both in terms of property management and customer service.",
  },
  {
    id: 4,
    title: "Personalisation",
    content:
      "Prioritising the comfort and Dedication to continuous learning and improvement, both in terms of property management and customer service. ",
  },
  {
    id: 5,
    title: "Sustainability",
    content:
      "Committed to environmental responsibility, implementing practices that minimize our impact and encourage responsible travel.",
  },
  {
    id: 6,
    title: "Integrity",
    content:
      "Operate with the utmost integrity, ensuring honesty, fairness, and ethical conduct in all our dealings.",
  },
];

const OurCoreValues = () => {
  return (
    <div className=" m-auto! md:max-w-[1279px]">
      <div className=" max-w-75 m-auto! md:max-w-294.5">
        <p className="text-[12.73px] text-center md:text-[20px] lg:text-[22px] leading-1.8 md:leading-[32px] lg:leading-[36px] mt-[60px]!">
          ProVision Support Services CIC is a community-interest organisation
          providing inclusive, person-centred supported living solutions. We
          support individuals with diverse needs to live safely, independently,
          and with dignity in accommodation tailored to their preferences and
          goals.
        </p>
      </div>
      <h2 className="text-center text-[28px] mt-[50px]! mb-[20px]! lg:text-[40px]">
        Our Core Values
      </h2>
      <div className=" flex flex-col m-auto!  max-w-[300px]  gap-3 md:flex-wrap md:flex-row md:max-w-[1279px]  ">
        {coreValues.map((value) => (
          // corevlaues
          <div
            key={value.id}
            className=" flex flex-col m-auto!   max-w-[400px]  md:max-w-[400px] "
          >
            <div className=" border-l-[#c9a893] py-[10px]! pl-[16px]!  max-w-[440px] border-l-1 pl-[5px]!">
              <p>{value.id}</p>
            </div>
            {/* valuecontent */}
            <div className=" border-[#c9a893]  p-[15px]! pl-[15px]! rounded-b-[5px] border pl-[5px]! md:h-[150px]">
              <h2 className="text-[20px] mb-[5px]! ">{value.title}</h2>
              <p className="text-[16px] md:">{value.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCoreValues;
