import image1 from "../../assets/icons/fluent-mdl2_commitments.png";
import image2 from "../../assets/icons/eos-icons_trusted-organization.png";
import image3 from "../../assets/icons/mdi_finance.png";
import image4 from "../../assets/icons/fluent_people-team-20-filled.png";
const accoProvd = [
  {
    image: image1,
    title: "Your Commitment",
    content:
      "Adherence to the terms outlined in the License Agreement and our House Rules is imperative for the continuity of our tenancy agreement. Deviations from these standards may compromise the tenancy agreement. However, it's not just about rules; it's about the journey we embark on together. We expect our residents to commit to a minimum tenure of nine months, during which we work collaboratively to help you achieve the objectives set forth in your personalized Support Plan.",
  },
  {
    image: image2,
    title: "Our Promise to You",
    content:
      "Upon successful completion of the Support Plan and reaching the nine-month milestone, ProVision Support Services CIC will extend our support to secure independent accommodation. This may encompass private rental arrangements or properties administered by the local council. We are committed to your successful transition, ensuring that you continue to enjoy stable and independent living. We understand that everyone's path is unique, and we're here to guide you every step of the way.",
  },
  {
    image: image3,
    title: "Financial Support",
    content:
      "We acknowledge that financial challenges can pose barriers to accessing suitable housing. If you face such challenges, your dedicated Support Worker will collaborate with you to explore viable strategies for resolution, ensuring that you have the financial support you need to thrive.",
  },
  {
    image: image4,
    title: "We're Here for You",
    content:
      "At ProVision Accommodation, we're not just a landlord; we're your partner on the journey to self-sufficient living. We're committed to providing more than just a roof over your head. We're here to create a supportive environment that empowers you to achieve your goals, make lasting memories, and embrace a brighter future.",
  },
];

const AccomodationProvides = () => {
  return (
    <div className="flex flex-col gap-[11px] mt-[50px]!  !mb-[30px] text-[white] !mx-auto max-w-[350px]  md:flex-row md:flex-wrap justify-center  md:max-w-[750px] md:max-h-[600px] lg:max-w-[1330px] md:max-h-[830px] md:mt-[70px]! md:m-auto!">
      {accoProvd.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-[#2C2C2C] max-w-[350px] max-h-[215.38px] rounded-[12.92px] pt-[24.54px]! pl-[30.69px]! pb-[20px]! gap-[10.15px] lg:max-w-[650px] lg:max-h-[400px] md:rounded-[24px]"
        >
          <img
            className="max-w-[37.69px] max-h-[37.69px] lg:max-w-[70px] lg:max-h-[70px]"
            src={item.image}
            alt={item.title}
          />
          <h2 className="text-[17.23px] lg:text-[32px] ">{item.title}</h2>
          <p className="text-[8.62px] max-h-[87px] max-w-[291.31px] lg:text-[16px] md:max-h-[158px]    md:max-w-[540px]">
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AccomodationProvides;
