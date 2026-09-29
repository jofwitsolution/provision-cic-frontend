import Footer from "../../components/Footer";

import Faqs from "./Faqs";
import FaqHero from "./FaqHero";
import Navbar from "@/components/navigations/Navbar";
import JoinProvision from "@/components/JoinProvision";

const Faq = () => {
  return (
    <>
      <Navbar />
      <FaqHero />
      <Faqs />
      <JoinProvision />
      <Footer />
    </>
  );
};

export default Faq;
