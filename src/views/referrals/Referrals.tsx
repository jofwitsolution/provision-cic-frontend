import Footer from "../../components/Footer";
import ReferralsForm from "./ReferralsForm";
import Navbar from "@/components/navigations/Navbar";
import ReferralHero from "./ReferralHero";

const Referrals = () => {
  return (
    <>
      <Navbar />
      <ReferralHero />
      <ReferralsForm />
      <Footer />
    </>
  );
};

export default Referrals;
