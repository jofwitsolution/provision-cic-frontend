import companylogo from "../assets/primary-logo.png";
import linkedin from "../assets/icons/mdi_linkedin.png";
import twitter from "../assets/icons/prime_twitter.png";
import instagram from "../assets/icons/mdi_instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-2.5 flex max-h-[50vh] gap-3 bg-[#ffebde] p-4 font-DM-Sans md:mx-10 md:mt-5 md:max-h-[60vh] md:rounded-t-[15px] lg:max-h-[60vh] xl:max-h-[50vh]">
      <div className="w-1/2">
        <h2 className="mx-2.5 mb-1.5 mt-0">ProVison CIC</h2>
        <p className="mx-2.5 my-0 text-xs leading-relaxed md:text-sm lg:text-base xl:text-lg">
          Our core ethos centers on the well-being of individuals. This is
          evident in our dedication to providing safe, high-quality homes and
          supporting people in their journey toward greater independence.
        </p>
        <img src={companylogo} alt="" className="mx-2.5 my-2.5 max-w-30" />
      </div>

      <hr className="h-auto w-px border-none bg-[#e6c1a9]" />

      <div className="w-1/2">
        <h2 className="mb-2.5 text-lg font-medium">Join Our Newsletter</h2>

        <div className="mt-2.5 flex flex-col gap-2 md:flex-row">
          <input
            type="text"
            placeholder="Your Email"
            className="w-[120px] rounded-[20px] border border-[#e6c1a9] px-3 py-1.5 font-['DM_Sans',sans-serif] text-xs outline-none placeholder:text-[10px] placeholder:text-[#dd8b54] md:w-[220px]"
          />
          <button className="w-20 cursor-pointer rounded-[20px] border-none bg-[#934713] px-2.5 py-1.5 text-xs text-white md:px-[17px] md:py-[9px] md:text-[13px]">
            Suscribe
          </button>
        </div>

        <div className="mt-[10px]">
          <Link to="/faq">
            <p className="text-[#934713] ">Faqs</p>
          </Link>
          <Link to="/termsandcondition">
            <p className="text-[#934713] ">Terms & Conditions</p>
          </Link>
          <Link to="/privacy-policy">
            <p className="text-[#934713] ">Privacy Policy</p>
          </Link>
        </div>

        <div className="mt-6 flex gap-2.5">
          <img
            src={linkedin}
            alt=""
            className="h-7 w-7 rounded-lg bg-[#934713] p-1.5"
          />
          <img
            src={twitter}
            alt=""
            className="h-7 w-7 rounded-lg bg-[#934713] p-1.5"
          />
          <img
            src={instagram}
            alt=""
            className="h-7 w-7 rounded-lg bg-[#934713] p-1.5"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
