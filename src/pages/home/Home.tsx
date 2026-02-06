import Navbar from "@/components/navigations/Navbar";
import WelcometoProvision from "./WelcometoProvision";
import Footer from "@/components/Footer";
import LatestEvents from "./LatestEvent";
import WhyChooseUs from "./WhyChooseUs";
import WhatweDo from "./Whatwedo.tsx";
import WhatAreWe from "./Whatarewe";
import Whereweoperate from "./Whereweoperate.tsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <WelcometoProvision />
      <WhatAreWe />
      <WhatweDo />
      <Whereweoperate />
      <WhyChooseUs />
      <LatestEvents />
      <Footer />
    </div>
  );
};

export default Home;
