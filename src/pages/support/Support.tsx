import SupportHero from "./SupportHero";
import SupportList from "./SupportList";
import Footer from "../../components/Footer";

import SupportCommunities from "./SupportCommunities";
import JoinProvision from "@/components/JoinProvision";
import Navbar from "@/components/navigations/Navbar";

const Support = () => {
  return (
    <div>
      <Navbar />
      <SupportHero />
      <SupportList />
      <SupportCommunities />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default Support;
