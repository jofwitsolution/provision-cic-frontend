import Button from "../../components/Button";
import frame11 from "../../assets/images/Frame 11.png";
import frame12 from "../../assets/images/Frame 11 (1).png";
import frame13 from "../../assets/images/Frame 11 (3).png";
import { Link } from "react-router-dom";

const Whatwedo = () => {
  return (
    <div className="mx-auto max-w-[1272px] pt-[50px] font-['DM_Sans',sans-serif]">
      <h2 className="mb-2.5 text-center text-base font-semibold md:text-4xl">
        What We Do
      </h2>
      <p className="mb-2.5 text-center">Provision CIC Services</p>

      <div className="mb-5 flex flex-wrap gap-5 px-5 py-2.5 md:grid md:grid-cols-2 md:grid-rows-[auto_auto] md:[grid-template-areas:'a_b'_'c_c']">
        {/* Service 1 */}
        <div className="relative h-fit rounded-lg border border-[#c6c5c5] bg-[#f6f6f6] pb-2.5 md:[grid-area:a]">
          <div className="m-0 w-full">
            <img src={frame11} alt="" className="h-full w-full rounded-t-lg" />
          </div>
          <p className="mb-2.5 mt-2.5 pl-2.5 text-left text-xl font-semibold text-black md:text-lg">
            Our Accommodation
          </p>
          <p className="h-[190px] px-2.5 text-left text-base font-medium md:h-[150px] md:text-[17px]">
            We provide outstanding guest experiences by offering well-maintained
            properties, attentive customer service, and local recommendations.
          </p>
          <div className="mx-auto mr-2.5 mt-2.5 flex items-center justify-end">
            <Link to="/accomodation">
              <Button text="Learn More" />
            </Link>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative h-fit rounded-lg border border-[#c6c5c5] bg-[#f6f6f6] pb-2.5 md:[grid-area:b]">
          <div className="m-0 w-full">
            <img src={frame12} alt="" className="h-full w-full rounded-t-lg" />
          </div>
          <p className="mb-2.5 mt-2.5 pl-2.5 text-left text-xl font-semibold text-black md:text-lg">
            Support Service
          </p>
          <p className="h-[190px] px-2.5 text-left text-base font-medium md:h-[150px] md:text-[17px]">
            We specialise in helping individuals maintain their tenancy and
            prepare for self-sufficient living. Our mission is to provide
            inclusive and supported living experiences tailored to the unique
            needs and preferences of our clients.
          </p>
          <div className="mx-auto mr-2.5 mt-2.5 flex items-center justify-end">
            <Link to="/support">
              <Button text="Learn More" />
            </Link>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative h-fit rounded-lg border border-[#c6c5c5] bg-[#f6f6f6] pb-2.5 md:[grid-area:c]">
          <div className="m-0 w-full">
            <img src={frame13} alt="" className="h-full w-full rounded-t-lg" />
          </div>
          <p className="mb-2.5 mt-2.5 pl-2.5 text-left text-xl font-semibold text-black md:text-lg">
            Communities
          </p>
          <p className="h-[190px] px-2.5 text-left text-base font-medium md:h-[150px] md:text-[17px]">
            Our community development is guided by integrity, transparency, and
            a strong commitment to the well-being of the people we serve. We
            focus on creating positive, lasting change that improves lives and
            strengthens the overall growth and vitality of the community.
          </p>
          <div className="mx-auto mr-2.5 mt-2.5 flex items-center justify-end">
            <Link to="/support">
              <Button text="Learn More" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
