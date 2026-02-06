import icon1 from "../../assets/icons/Icon.png";
import icon2 from "../../assets/icons/Icon (1).png";
const ContactForm = () => {
  return (
    <div className="max-w-[350px] !m-auto !mt-[80px] !px-4 md:max-w-[1000px] ">
      <div className="text-center !mb-[40px]">
        <h2 className="text-[26px] font-semibold">Get In Touch</h2>
        <p className="text-[14px] text-gray-500">Send Us a Message</p>
      </div>

      <form className=" !mt-[20px] grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        {/* Full Name */}
        <div>
          <label className="text-[14px] !ml-[10px]">Full Name</label>

          <div className="relative ">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300  !px-[10px] outline-none !py-[10px]"
            />
            <img
              src={icon1}
              alt=""
              className="absolute right-[12px] top-3/5 -translate-y-1/2 w-[20px] h-[20px]"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="text-[14px] !ml-[10px]">Phone Number</label>

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full !mt-[5px] border shadow-[0_0_6px_rgba(0,0,0,0.5)]  rounded-[6px] border-gray-300 placeholder:!px-[10px] outline-none !py-[10px]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-[14px] !ml-[10px]">Email</label>
          <div className="relative ">
            <input
              type="email"
              placeholder="Email"
              className="w-full !mt-[5px] border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300 placeholder:!px-[10px] outline-none !py-[10px]"
            />
            <img
              src={icon2}
              alt=""
              className="absolute right-[12px] top-3/5 -translate-y-1/2 w-[20px] h-[20px]"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="text-[14px] !ml-[10px]">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            className="w-full !mt-[5px] border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300 placeholder:!px-[10px] outline-none !py-[10px]"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="text-[14px] !ml-[10px]">Message</label>
          <textarea
            placeholder="Type your message here"
            className="w-full !mt-[5px] border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[10px] border-gray-300 placeholder:!px-[10px] outline-none !py-[10px] min-h-[120px]"
          />
        </div>

        {/* Button */}
        <div className="md:col-span-2 flex justify-end">
          <button
            className="
          bg-[#A35A43]
          text-white
          !px-[28px]
          !py-[10px]
          rounded-md
          text-[14px]
        "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
