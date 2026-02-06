import React from "react";
import maskedgroup from "../../assets/images/Mask group (2).png";
import maskedgroup2 from "../../assets/images/Group 21.png";

const OurAccomodation = () => {
  return (
    <div className="max-w-[330px] mt-[50px]! max-h-[396px] m-auto!  md:max-w-[1321.49px] md:max-h-[1306.68px] md:mt-[100px]!">
      <h2 className="text-center text-[22px] md:text-[40px]">
        OurAccomodation{" "}
      </h2>

      <div className="md:max-w-[1321.49] md:max-h-[1204.68px]">
        {/* div1 */}
        <div className=" flex  max-w-[370px] mt-[10px]! m-auto!   max-h-[151px]  md:max-w-[692.74px]!  md:max-h-[665.29px]  lg:max-w-[992.74px]! lg:max-h-[665.29px]">
          <div className=" flex  max-w-[370px] !mt-[10px]m-auto!   max-h-[261px]  !md:max-w-[692.74px] md:max-h-[665.29px] !lg:max-w-[1092.74px] ">
            <img className=" w-[100%] h-[100%]" src={maskedgroup} alt="" />
          </div>
          <p className="text-[8.4px] m-auto!  md:text-[15px]  lg:text-[25px]  md:max-w-[481px] lg:max-w-[781px] md:max-h-[320px]">
            {/* <p className="text-[8.4px] max-w-[251px] m-auto! md:text-[15px]   lg:text-[25px] bg-[red] md:max-w-[450px] md:max-h-[320px] lg:max-w-[581px]"> */}
            Our strategically located accommodations are designed to meet the
            unique requirements of our residents. Embracing communal living, our
            residents share essential facilities such as kitchens and bathrooms
            while enjoying individual bedrooms and well-maintained communal
            spaces. This collective responsibility not only ensures affordable
            living but also fosters a sense of community and mutual support.
          </p>
        </div>

        {/* div2 */}
        <div className=" flex max-w-[370px] !mt-[10px] !mx-auto max-h-[151px] md:max-w-[692.74px] md:max-h-[665.29px] lg:max-w-[992.74px]">
          <p className=" text-[8.4px] max-w-[450px] !mx-auto !my-auto  md:text-[15px] lg:text-[25px] md:max-w-[550px] md:max-h-[320px] lg:max-w-[681px]">
            Our strategically located accommodations are designed to meet the
            unique requirements of our residents. Embracing communal living, our
            residents share essential facilities such as kitchens and bathrooms
            while enjoying individual bedrooms and well-maintained communal
            spaces. This collective responsibility not only ensures affordable
            living but also fosters a sense of community and mutual support.
          </p>

          <div className=" max-w-[139.99px] !mr-[20px] max-h-[151.02px] md:max-w-[387.74px] md:max-h-[365.29px] lg:max-w-[457.74px] lg:max-h-[435.29px]">
            <img
              src={maskedgroup2}
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default OurAccomodation;
