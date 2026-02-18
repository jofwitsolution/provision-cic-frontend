import Footer from "../../components/Footer";
import ReferralsForm from "./ReferralsForm";
import Navbar from "@/components/navigations/Navbar";
import ReferralHero from "./ReferralHero";

const Referrals = () => {
  return (
    <div>
      <Navbar />
      <ReferralHero />
      <ReferralsForm />
      <Footer />
    </div>
  );
};

export default Referrals;
