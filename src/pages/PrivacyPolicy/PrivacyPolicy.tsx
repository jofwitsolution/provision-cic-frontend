import Footer from "../../components/Footer";
import Policies from "./Policies";
import PrivacyPolicyHero from "./PrivacyPolicyHero";

import Navbar from "@/components/navigations/Navbar";
import JoinProvision from "@/components/JoinProvision";
import Meta from "@/components/shared/Meta";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta
        title="Privacy Policy - ProVision Support Services CIC"
        description="Privacy Policy for ProVision Support Services CIC"
      />
      <Navbar />
      <PrivacyPolicyHero />
      <Policies />
      <JoinProvision />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
