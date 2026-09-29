import SupportHero from "./SupportHero";
import SupportList from "./SupportList";
import Footer from "../../components/Footer";

import SupportCommunities from "./SupportCommunities";
import GoFundMeSection from "@/components/GoFundMeSection";
import JoinProvision from "@/components/JoinProvision";
import Navbar from "@/components/navigations/Navbar";

const Support = () => {
  return (
    <>
      <Navbar />
      <SupportHero />
      <SupportList />
      <SupportCommunities />
      <GoFundMeSection />
      <JoinProvision />
      <Footer />
    </>
  );
};

export default Support;
