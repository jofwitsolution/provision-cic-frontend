import JoinProvision from "@/components/JoinProvision";
import Footer from "../../components/Footer";
import TermsAndConditionHero from "../TermsAndCondition/TermsAndConditionHero";
import Terms from "./Terms";

import Navbar from "@/components/navigations/Navbar";
import Meta from "@/components/shared/Meta";

const TermsAndCondition = () => {
  return (
    <>
      <Meta
        title="Terms and Conditions - ProVision Support Services CIC"
        description="Terms and Conditions for ProVision Support Services CIC"
      />
      <Navbar />
      <TermsAndConditionHero />
      <Terms />
      <JoinProvision />
      <Footer />
    </>
  );
};

export default TermsAndCondition;
