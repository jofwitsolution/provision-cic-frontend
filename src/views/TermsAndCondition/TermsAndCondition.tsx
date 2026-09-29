import JoinProvision from "@/components/JoinProvision";
import Footer from "../../components/Footer";
import TermsAndConditionHero from "../TermsAndCondition/TermsAndConditionHero";
import Terms from "./Terms";

import Navbar from "@/components/navigations/Navbar";

const TermsAndCondition = () => {
  return (
    <>
      <Navbar />
      <TermsAndConditionHero />
      <Terms />
      <JoinProvision />
      <Footer />
    </>
  );
};

export default TermsAndCondition;
