import React from "react";

const Policies = () => {
  return (
    <div className=" text-[10.78px] max-w-[400px] rounded-[30px] !m-auto  !mt-[30px] md:!mt-[60px]   !px-[18px] !py-[24px] bg-[#F6F6F6] border-[#C6C5C5] md:max-w-[1200px] md:!px-[30px] md:!py-[62px] md:text-[22px]">
      <p className="!mb-[10px] font-bold">
        At ProVision Support Service, we are committed to ensuring the privacy
        and security of your personal data. We are dedicated to complying with
        the General Data Protection Regulation (GDPR) and informing you about
        the ways we collect, use, and protect your data. By engaging with our
        services, you consent to our data processing practices as outlined in
        this privacy policy.{" "}
      </p>
      <p className="!mb-[10px]">
        {" "}
        <h5 className=" font-bold">1. Data Collection and Storage </h5>
        To provide you with support, we record details of your support. These
        details may include your personal and special category data, as defined
        by GDPR.
      </p>

      <p className="!mb-[10px]">
        <h5 className=" font-bold">2. Data Usage and Sharing </h5>
        <ul className=" list-disc !ml-[20px]">
          <li>
            Permission to Store Your Data:By signing our consent form, you
            provide your consent for us to process your data, including personal
            and special category data. Your support details will be securely
            stored in a shared electronic case management system accessed by
            ProVision Support Service members. Paper copies of your data may
            also be stored securely.
          </li>
          <li>
            Permission to Share Your Data with Other Organizations:While we
            treat all information you share with us confidentially, there may be
            instances where we suggest that you seek advice from other
            organizations better equipped to address your needs. With your
            consent, we may:
          </li>
          <li> Refer you to other third-party services.</li>
          <li>
            Make appointments with other third-party services on your behalf.
          </li>
          <li>
            Share your personal information with other third-party services so
            they have initial information about you and your possible
            issues.{" "}
          </li>
        </ul>
      </p>
      <p className="!mb-[10px]">
        <h5 className=" font-bold">3. Personal and Special Category Data </h5>
        Personal data includes information that can be used to identify you,
        such as your name, date of birth, address, telephone number, etc.
        Special category data includes information related to racial or ethnic
        origin, religious beliefs, health, sexuality or sex life, offences
        and/or convictions.
      </p>

      <p className="!mb-[10px]">
        <h5 className=" font-bold">4. Data Storage </h5>
        Your support details will be stored in a shared electronic case
        management system accessed by ProVision Support Service members and
        their contractual partners. Your information may also be securely stored
        in paper files held by ProVision Support Service or its contractual
        partners.
      </p>
      <p className="!mb-[10px]">
        <h5 className=" font-bold">5. Data Controller and Data Processor </h5>
        <ul className=" list-disc !ml-[20px]">
          <li>
            {" "}
            A Data Controller is responsible for ensuring that your data is
            processed according to the law, including accuracy and security.
            Typically, the Data Controller is the funder of the service you
            receive.{" "}
          </li>{" "}
          <li>
            ProVision Support Service, for GDPR purposes, acts as the Data
            Processor on behalf of the Commissioner of the service.{" "}
          </li>
        </ul>
      </p>
      <p className="!mb-[10px]">
        <h5 className=" font-bold">6. Consent Withdrawal </h5> You have the
        right to withhold or withdraw your consent. However, this may affect our
        ability to provide you with support. We will work with your Data
        Controller to find alternative solutions that align with our contractual
        obligations.
      </p>
      <p className="!mb-[10px]">
        <h5 className=" font-bold">7. Data Sharing </h5> We will not share your
        information with any third party without your explicit consent, except
        where required by law. Both ProVision Support Service and our
        contractual partners have individual complaints policies, and you may
        request further details.
      </p>
    </div>
  );
};

export default Policies;
