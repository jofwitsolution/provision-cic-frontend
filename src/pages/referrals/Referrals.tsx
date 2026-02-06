import Footer from "../../components/Footer";
import ReferralsForm from "./ReferralsForm";
import Navbar from "@/components/navigations/Navbar";
import JoinProvision from "@/components/JoinProvision";
import ReferralHero from "./ReferralHero";

const Referrals = () => {
  return (
    <div>
      <Navbar />
      <ReferralHero />
      <ReferralsForm />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default Referrals;
