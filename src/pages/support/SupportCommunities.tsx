import imagecom1 from "../../assets/images/Frame 11 (5).png";
import imagecom2 from "../../assets/images/Frame 11 (6).png";
import imagecom3 from "../../assets/images/Frame 11 (8).png";

const supportcomm = [
  {
    image: imagecom1,
    title: "Community Integration",
    content:
      "Expanding your social networks is a key part of our support system. We're here to enhance your community integration, ensuring you feel a sense of belonging and connection within your new living environment.",
  },
  {
    image: imagecom2,
    title: "Community-Centric Living",
    content:
      "Our strategically located accommodations are designed to foster communal living, where residents share essential facilities such as kitchens and bathrooms. This collective approach not only promotes affordability but also creates a strong sense of community.",
  },
  {
    image: imagecom3,
    title: "Sustainable Living",
    content:
      "Our commitment to sustainability is unwavering. We are dedicated to environmental responsibility, implementing practices that minimise our impact and encourage responsible travel. ProVision Communities are designed with eco-friendly practices in mind, ensuring that we do our part to protect the environment and the communities we serve.",
  },
];

const SupportCommunities = () => {
  return (
    <section className="flex mt-7.5! m-auto! px-4 flex-col  max-w-92.5 max-h-389 md:max-w-192.5 lg:max-w-300 md:mt-12.5">
      {/*  */}
      <div className="flex flex-col gap-3.75 mb-5! text-center max-h-36">
        {/* h2 */}
        <h2 className="text-[22px] md: text-[25px">Our Accommodations</h2>
        {/* p */}
        <p className=" m-auto! text-[12px]  max-w-75 md:max-w-200 md:text-[18px]">
          We are dedicated to creating a positive and nurturing environment that
          goes beyond just accommodation. Our mission is to build communities
          that empower individuals and promote well-being, connection, and
          sustainability.
        </p>
      </div>
      <div className=" m-auto! mt-2.5! grid  gap-3  max-w-92.5 md:grid-cols-2  md:max-w-175  lg:max-w-275">
        {/*  */}
        {supportcomm.map((supportcom, index) => (
          //
          <div
            key={index}
            className={`  rounded-[10px]  bg-[#f2d9c2] md:w-full ${index === 2 ? "md:col-span-2 " : ""} `}
          >
            {/* image */}
            <img
              className="rounded-t-[10px] w-full md:h-77.75!"
              src={supportcom.image}
              alt=""
            />
            {/*  */}
            <div className="m-auto!  md:h-58.75 px-3.75 py-3.75  md:px-6.25 md:py-6.25!  lg:h-50 ">
              {/*  */}
              <h4 className="text-[14px] md:text-[20px]">{supportcom.title}</h4>
              {/*  */}
              <p className="text-[12px] md:text-[16px]">{supportcom.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportCommunities;
