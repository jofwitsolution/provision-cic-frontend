import icon2 from "../../assets/icons/solar_calendar-linear.png";
import icon3 from "../../assets/icons/Icon (1).png";
import icon1 from "../../assets/icons/Icon.png";

import "../../styles/ref.css";
const ReferralsForm = () => {
  return (
    <div className="min-h-screen !m-auto max-w-[350px] md:max-w-[800px] bg-[#F5F6F7] flex justify-center !py-[40px] !px-4">
      <div className="w-full bg-white border-[#1b1a1a] rounded-[6px] !px-[20px] !py-[24px]">
        {/* Title */}
        <h2 className="text-[18px] font-medium !mb-[20px]">Referral Form</h2>
        {/* Section 1 */}
        <p className="text-[12px] font-medium !mb-[10px]">
          Your Client's Details
        </p>

        {/* Full Name */}
        <div className="!mb-[16px]">
          <label className="text-[12px] block !mb-[4px]">Full Name</label>
          <div className="relative  w-full ">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300  !px-[10px] outline-none !py-[10px]"
            />

            <img
              src={icon1}
              alt=""
              className="absolute right-[12px] top-3/5 -translate-y-1/2 w-[25px] h-[25px]"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="!mb-[16px]">
          <label className="text-[12px] block !mb-[4px]">Date Of Birth</label>
          <div className="relative w-full">
            <input
              type="date"
              placeholder=""
              className="w-full !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300  !px-[10px] outline-none !py-[10px]"
            />
            <img
              src={icon2}
              alt=""
              className="absolute pointer-events-none right-[12px] top-3/5 -translate-y-1/2 w-[25px] h-[25px]"
            />
          </div>
        </div>

        {/* Sex at Birth */}
        <div className="!mb-[20px]">
          <label className="text-[12px] block !mb-[4px]">Sex at Birth</label>
          <select className="w-full  !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300 !px-[10px] outline-none !py-[10px]">
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>

        {/* client  Info */}

        <p className="text-[12px] font-medium !mb-[10px]">
          Your client's contact details
        </p>
        <p className="text-[12px] font-small !mb-[10px]">
          In this section please answer all questions on behalf of the person
          you are referring.
        </p>

        <label className="text-[12px] font-medium !mb-[6px]">
          Does your client have a fixed address?
        </label>

        <select className="w-full   border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300  !px-[10px] outline-none !py-[10px]">
          <option>Yes</option>
          <option>No</option>
        </select>

        {/* Support Needs */}
        <label className="text-[12px] font-medium !mt-[12px] !mb-[6px]">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full !mt-[5px] !mb-[20px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300  !px-[10px] outline-none !py-[10px]"
        />

        {/* email */}
        <label className="text-[14px] !mt-[20px]">Email Address</label>
        <div className="relative ">
          <input
            type="text"
            placeholder="Enter Your email address"
            className="w-full !mt-[5px ] border shadow-[0_0_6px_rgba(0,0,0,0.5)]  rounded-[6px] border-gray-300 placeholder:!px-[10px] outline-none !py-[10px]"
          />
          <img
            src={icon3}
            alt=""
            className="absolute right-[12px] top-3/5 -translate-y-1/2 w-[20px] h-[20px]"
          />
        </div>

        {/* Sex at Birth */}

        <div className="!mb-[20px] !mt-[20px]">
          <label className="text-[12px] block !mb-[4px]">Sex at Birth</label>
          <select className="w-full  !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300 !px-[10px] outline-none !py-[10px]">
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>

        {/* how we can support them */}
        <p className="text-[16px] font-medium !mb-[10px]">
          How we can support them
        </p>

        <div className="!mb-[20px] !mt-[20px]">
          <label className="text-[12px] block !mb-[4px]">
            {" "}
            Description of support needs and reason for referral *{" "}
          </label>
          <textarea
            className=" w-full !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300 !px-[10px] outline-none !py-[10px]"
            placeholder="Type here"
          ></textarea>
        </div>

        {/* any assistance */}
        <div className="!mb-[20px] !mt-[20px]">
          <label className="text-[12px] block !mb-[4px]">
            {" "}
            Any assistance needed (eg. translation or access needs){" "}
          </label>
          <textarea
            className=" w-full !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300 !px-[10px] outline-none !py-[10px]"
            placeholder="Type here"
          ></textarea>
        </div>

        {/* how to contact */}
        <div className="!mb-[20px] !mt-[20px]">
          <label className="text-[12px] block !mb-[4px]">
            How would your client like us to contact them? *
          </label>
          <select className="w-full  !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300 !px-[10px] outline-none !py-[10px]">
            <option>Emails</option>
            <option>Phone</option>
            <option>Other</option>
          </select>
        </div>

        {/* your details */}
        <p className="text-[12px] font-medium !mb-[10px]">Your Details</p>
        <p className="text-[12px] font-small !mb-[10px]">
          In this section please answer all questions on behalf of the person
          you are referring.
        </p>

        {/* Full Name */}
        <div className="!mb-[16px]">
          <label className="text-[12px] block !mb-[4px]">Full Name</label>
          <div className="relative  w-full ">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300  !px-[10px] outline-none !py-[10px]"
            />
            <img
              src={icon1}
              alt=""
              className="absolute right-[12px] top-3/5 -translate-y-1/2 w-[25px] h-[25px]"
            />
          </div>
        </div>

        {/* role */}
        <div className="!mb-[20px] !mt-[20px]">
          <label className="text-[14px] !mt-[20px]">Role</label>
          <input
            type="tel"
            placeholder="Role"
            className="w-full !mt-[5px ] border shadow-[0_0_6px_rgba(0,0,0,0.5)]  rounded-[6px] border-gray-300 placeholder:!px-[10px] outline-none !py-[10px]"
          />
        </div>

        {/* Phone Number */}
        <div className="!mb-[20px] !mt-[20px]">
          <label className="text-[14px] !mt-[20px]">Phone Number</label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full !mt-[5px ] border shadow-[0_0_6px_rgba(0,0,0,0.5)]  rounded-[6px] border-gray-300 placeholder:!px-[10px] outline-none !py-[10px]"
          />
        </div>

        {/* email address */}
        <div className="!mb-[20px] !mt-[20px]">
          <label className="text-[14px] !mt-[20px]">Email Address</label>
          <div className="relative ">
            <input
              type="email"
              placeholder="Enter Your email address"
              className="w-full !mt-[5px ] border shadow-[0_0_6px_rgba(0,0,0,0.5)]  rounded-[6px] border-gray-300 placeholder:!px-[10px] outline-none !py-[10px]"
            />
            <img
              src={icon3}
              alt=""
              className="absolute right-[12px] top-3/5 -translate-y-1/2 w-[20px] h-[20px]"
            />
          </div>
        </div>

        {/* how you heard */}
        <div className="!mb-[20px] !mt-[20px]">
          <label className="text-[12px] block !mb-[4px]">
            How did you hear about our service? *
          </label>
          <select className="w-full  !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300 !px-[10px] outline-none !py-[10px]">
            <option>Social Media</option>
            <option>Phone</option>
            <option>Other</option>
          </select>
        </div>

        {/* Button */}
        <div className=" w-full flex justify-end  ">
          <button className="w-[130px] h-[56px]  bg-[#934713] text-white !py-[5px]  text-[17px]  !mt-[5px]   rounded-[10px]  outline-none ">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralsForm;
