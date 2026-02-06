import { Link } from "react-router-dom";

const JoinProvision = () => {
  return (
    <div className="m-auto mt-[30px] max-h-[113.73px] max-w-[400px] rounded-[9.75px] bg-[#FFEBDE] py-5 md:max-h-[350px] md:max-w-[1231px]">
      <h2 className="text-center text-[11.37px] md:text-[30px]">
        Join ProVision CIC Today!
      </h2>
      <p className="m-auto max-h-[26px] max-w-[327.66px] text-center text-[8.12px] md:max-h-[80px] md:max-w-[1009px] md:text-center md:text-[20px]">
        Join ProVision Support and experience living that's about more than just
        a place; it's about community, support, and growth. Welcome home!
      </p>
      <div className="m-auto mt-[10px] flex w-fit gap-[10px]">
        <Link to="/contact">
          <button className="rounded-[7px] border-[0.32px] border-[#D0D0D0] bg-[#FFFFFF] px-[13px] py-[6.5px] text-[5.85px] text-[#000000] md:rounded-[50px] md:px-7 md:py-3 md:text-[18px]">
            Get in touch
          </button>
        </Link>
        <Link to="/referrals">
          <button className="rounded-[7px] border-[0.32px] border-[#FE6D6D] bg-[#FD8282] px-[13px] py-[6.5px] text-[5.85px] text-[#FFFFFF] md:rounded-[50px] md:px-7 md:py-3 md:text-[18px]">
            Make a referral
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinProvision;
