import JoinProvision from "@/components/JoinProvision";
import Footer from "../../components/Footer";
import TermsAndConditionHero from "../TermsAndCondition/TermsAndConditionHero";
import Terms from "./Terms";

import Navbar from "@/components/navigations/Navbar";

const TermsAndCondition = () => {
  return (
    <div>
      <Navbar />
      <TermsAndConditionHero />
      <Terms />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default TermsAndCondition;
