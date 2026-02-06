import React, { useState } from "react";

const items = [
  {
    title: "Personalized Support Plans",
    content:
      "We tailor support plans to each individual's unique needs and aspirations.",
  },
  {
    title: "Expert Financial Guidance",
    content:
      "Our team provides expert financial guidance to promote independence.",
  },
  {
    title: "Access to Specialised Services",
    content: "We connect individuals with trusted specialist services.",
  },
  {
    title: "Pathway to Independence",
    content: "We empower individuals on their journey to independent living.",
  },
];

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-[1272px] px-4 py-6 pt-[50px] font-['DM_Sans',sans-serif] md:max-w-[700px]">
      <h2 className="text-center text-base font-bold md:text-4xl">
        Why Choose Us
      </h2>
      <h4 className="mb-3 text-center font-normal">
        The <b>"ProVision"</b> Difference
      </h4>

      <p className="mb-5 text-center text-sm">
        Our personalized care, commitment to individual goals, and a clear path
        to independent living set us apart. With us, you're not just a resident;
        you're on a journey towards self-sufficiency and well-being.
      </p>

      <div>
        {items.map((item, index) => (
          <div className="mb-[5px]" key={index}>
            <button
              className={`flex w-full justify-between rounded-none border border-[#e9e7e7] px-3.5 py-3.5 text-left text-lg font-medium ${
                openIndex === index
                  ? "bg-[#934713] text-white"
                  : "bg-[#f8f8f8] text-black"
              }`}
              onClick={() => setOpenIndex(index)}
            >
              {item.title}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>

            {openIndex === index && (
              <div className="m-[2px] bg-[#fafafa] p-3.5 shadow-[0_8px_8px_-4px_rgba(0,0,0,0.1)]">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
