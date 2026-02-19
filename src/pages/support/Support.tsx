import SupportHero from "./SupportHero";
import SupportList from "./SupportList";
import Footer from "../../components/Footer";

import SupportCommunities from "./SupportCommunities";
import JoinProvision from "@/components/JoinProvision";
import Navbar from "@/components/navigations/Navbar";
import Meta from "@/components/shared/Meta";

const Support = () => {
  return (
    <>
      <Meta
        title="Support Services - ProVision Support Services CIC"
        description="Discover the comprehensive support services offered by ProVision Support Services CIC. We provide exceptional accommodation and support solutions tailored to meet the unique needs of individuals and communities. Explore our range of services designed to empower and enhance the lives of those we serve."
      />
      <Navbar />
      <SupportHero />
      <SupportList />
      <SupportCommunities />
      <JoinProvision />
      <Footer />
    </>
  );
};

export default Support;
