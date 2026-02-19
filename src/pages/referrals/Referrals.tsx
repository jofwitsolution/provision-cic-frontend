import Footer from "../../components/Footer";
import ReferralsForm from "./ReferralsForm";
import Navbar from "@/components/navigations/Navbar";
import ReferralHero from "./ReferralHero";
import Meta from "@/components/shared/Meta";

const Referrals = () => {
  return (
    <>
      <Meta
        title="Referrals - ProVision Support Services CIC"
        description="Refer someone to ProVision Support Services CIC and help them find exceptional accommodation and support services. Our referral program allows you to connect individuals in need with our sustainable accommodations and community support. Join us in making a positive impact by referring someone today."
      />
      <Navbar />
      <ReferralHero />
      <ReferralsForm />
      <Footer />
    </>
  );
};

export default Referrals;
