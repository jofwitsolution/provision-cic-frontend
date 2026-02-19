import Locationicon from "../../assets/icons/Icon Container.png";
import Timeicon from "../../assets/icons/Icon Container (1).png";
import Callicon from "../../assets/icons/Icon Container (2).png";
import Messageeicon from "../../assets/icons/Icon Container (3).png";
const contactCards = [
  {
    icon: Messageeicon,
    text: (
      <>
        info@provisionsupportservice.co.uk <br />{" "}
        referrals@provisionsupportservice.co.uk
      </>
    ),
  },
  {
    icon: Callicon,
    text: (
      <>
        +44 7828 887031
        <br />
        +44 7581 467406
      </>
    ),
  },
  {
    icon: Timeicon,
    text: (
      <>
        Mon – Fri – 8:00am – 5:30pm
        <br />
        Sat – Sun – By appointment
      </>
    ),
  },
  {
    icon: Locationicon,
    text: (
      <>
        32 Hazelville Road, B28 9QF
        <br />
        Birmingham
      </>
    ),
  },
];

const ContactInfo = () => {
  return (
    <div className="max-w-full mt-10! m-auto! px-4!">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5">
        {contactCards.map((card, index) => (
          <div
            key={index}
            className="
          bg-[#F5F5F5]
          rounded-[14px]
          border
          border-[#D6D6D6]
          p-5!
          flex
          flex-col
          items-center
          text-center
          gap-3
          relative"
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-full  flex items-center justify-center text-[20px]">
              <img
                src={card.icon}
                alt="Contact Icon"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <p className="text-[10px] leading-4.5 text-[#333]">{card.text}</p>

            {/* Arrow */}
            <span className="absolute top-3.5 right-3.5 text-[14px]">↗</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
