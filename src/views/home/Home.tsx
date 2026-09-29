import Navbar from "@/components/navigations/Navbar";
import WelcometoProvision from "./WelcometoProvision";
import Footer from "@/components/Footer";
import LatestEvents from "./LatestEvent";
import WhyChooseUs from "./WhyChooseUs";
import WhatweDo from "./Whatwedo";
import WhatAreWe from "./Whatarewe";
import Whereweoperate from "./Whereweoperate";
import GoFundMeSection from "@/components/GoFundMeSection";
import JoinProvision from "@/components/JoinProvision";

const Home = () => {
  return (
    <>
      <Navbar />
      <WelcometoProvision />
      <WhatAreWe />
      <WhatweDo />
      <Whereweoperate />
      <WhyChooseUs />
      <LatestEvents />
      <GoFundMeSection />
      <JoinProvision />
      <Footer />
    </>
  );
};

export default Home;
