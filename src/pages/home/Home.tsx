import Navbar from "@/components/navigations/Navbar";
import WelcometoProvision from "./WelcometoProvision";
import Footer from "@/components/Footer";
import LatestEvents from "./LatestEvent";
import WhyChooseUs from "./WhyChooseUs";
import WhatweDo from "./Whatwedo.tsx";
import WhatAreWe from "./Whatarewe";
import Whereweoperate from "./Whereweoperate.tsx";
import JoinProvision from "@/components/JoinProvision.tsx";
import Meta from "@/components/shared/Meta";

const Home = () => {
  return (
    <>
      <Meta
        title="Home - ProVision Support Services CIC"
        description="Welcome to ProVision Support Services CIC, your trusted partner in accommodation and support services. We are dedicated to providing exceptional solutions that empower individuals and communities. Explore our range of services and discover how we can assist you in finding the perfect property solution."
      />
      <Navbar />
      <WelcometoProvision />
      <WhatAreWe />
      <WhatweDo />
      <Whereweoperate />
      <WhyChooseUs />
      <LatestEvents />
      <JoinProvision />
      <Footer />
    </>
  );
};

export default Home;
