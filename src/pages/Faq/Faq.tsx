import Footer from "../../components/Footer";

import Faqs from "./Faqs";
import FaqHero from "./FaqHero";
import Navbar from "@/components/navigations/Navbar";
import JoinProvision from "@/components/JoinProvision";
import Meta from "@/components/shared/Meta";

const Faq = () => {
  return (
    <>
      <Meta
        title="FAQ - ProVision Support Services CIC"
        description="Find answers to frequently asked questions about ProVision Support Services CIC. Learn more about our accommodation and support services, how to get involved, and other common inquiries. Get the information you need to connect with us and benefit from our services."
      />

      <Navbar />
      <FaqHero />
      <Faqs />
      <JoinProvision />
      <Footer />
    </>
  );
};

export default Faq;
