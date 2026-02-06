import { Link } from "react-router-dom";
import areaImg1 from "../../assets/images/coventry-f6acc2bd 2.png";
import areaImg2 from "../../assets/images/image 1.png";
import backgroundImg from "../../assets/images/Vector (1).png";

const Whereweoperate = () => {
  return (
    <div
      className="w-full bg-contain bg-no-repeat px-4 py-20 font-DM-Sans md:bg-cover md:px-10 md:py-[140px] min-[1150px]:px-20 min-[1150px]:py-[200px]"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h2 className="mb-1.5 mt-12.5 text-center text-base font-bold text-white md:text-4xl">
        Where we Operate
      </h2>
      <p className="mb-4 text-center text-[13px] text-white md:mb-10 md:text-base">
        Coventry Supported Living Services
      </p>

      {/* Area 1 */}
      <div className="mx-auto mb-6 flex gap-3.5 bg-[#ffebde] p-3 md:gap-6 min-[1150px]:max-w-[1272px] min-[1150px]:gap-6 min-[1150px]:p-6">
        <div className="flex w-[60%] flex-col gap-2">
          <p className="text-[10px] leading-[1.6] md:text-sm min-[1150px]:text-lg">
            ProVision Support Services CIC provides supported living and
            person-centred care services across Coventry City. We work closely
            with individuals, families, and local partners to deliver safe,
            inclusive, and high-quality support that meets individual needs.
          </p>
          <ul className="pl-[18px] text-[10px] leading-relaxed md:text-[13px] min-[1150px]:text-base">
            <li>Person-centred care</li>
            <li>Local partnerships</li>
            <li>Safe & inclusive</li>
            <li>High-quality practice</li>
          </ul>
          <div className="mt-2.5 flex gap-2">
            <Link to="/support">
              <button className="cursor-pointer rounded-md border-none bg-[#934713] px-2.5 py-2 text-[10px] text-white md:px-3.5 md:py-2.5 md:text-xs min-[1150px]:text-sm">
                Get Support
              </button>
            </Link>
            <Link to="/referrals">
              <button className="cursor-pointer rounded-md border border-[#934713] bg-transparent px-2.5 py-2 text-[10px] text-[#934713] md:px-3.5 md:py-2.5 md:text-xs min-[1150px]:text-sm">
                Refer Someones
              </button>
            </Link>
          </div>
        </div>
        <div className="flex w-[40%] items-center">
          <img
            src={areaImg1}
            alt=""
            className="h-auto w-full object-cover md:max-h-[200px] min-[1150px]:max-h-[280px]"
          />
        </div>
      </div>

      <h4 className="mt-6 text-center text-xs text-white md:mt-[30px] md:text-base min-[1150px]:text-2xl">
        Refer someone who needs support — we'll take it from here
      </h4>
      <p className="mb-8 text-center text-xs text-white md:mb-10 md:text-base min-[1150px]:text-xl">
        ProVision Support Services CIC
      </p>

      {/* Area 2 */}
      <div className="mx-auto mb-6 flex gap-3.5 bg-[#ffebde] p-3 md:gap-6 min-[1150px]:max-w-[1272px] min-[1150px]:gap-6 min-[1150px]:p-6">
        <div className="flex w-[40%] items-center">
          <img
            src={areaImg2}
            alt=""
            className="h-auto w-full object-cover md:max-h-[200px] min-[1150px]:max-h-[280px]"
          />
        </div>
        <div className="flex w-[60%] flex-col gap-2">
          <p className="text-[10px] leading-[1.6] md:text-sm min-[1150px]:text-lg">
            ProVision Support Services CIC provides supported living and
            person-centred care services across Coventry City. We work closely
            with individuals, families, and local partners to deliver safe,
            inclusive, and high-quality support that meets individual needs.
          </p>
          <ul className="pl-[18px] text-[10px] leading-relaxed md:text-[13px] min-[1150px]:text-base">
            <li>Person-centred care</li>
            <li>Local partnerships</li>
            <li>Safe & inclusive</li>
            <li>High-quality practice</li>
          </ul>
          <div className="mt-2.5 flex gap-2">
            <Link to="/support">
              <button className="cursor-pointer rounded-md border-none bg-[#934713] px-2.5 py-2 text-[10px] text-white md:px-3.5 md:py-2.5 md:text-xs min-[1150px]:text-sm">
                Get Support
              </button>
            </Link>
            <Link to="/referrals">
              <button className="cursor-pointer rounded-md border border-[#934713] bg-transparent px-2.5 py-2 text-[10px] text-[#934713] md:px-3.5 md:py-2.5 md:text-xs min-[1150px]:text-sm">
                Refer Someones
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whereweoperate;
