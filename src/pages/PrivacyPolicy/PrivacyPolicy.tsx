import Footer from "../../components/Footer";
import Policies from "./Policies";
import PrivacyPolicyHero from "./PrivacyPolicyHero";

import Navbar from "@/components/navigations/Navbar";
import JoinProvision from "@/components/JoinProvision";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <PrivacyPolicyHero />
      <Policies />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
