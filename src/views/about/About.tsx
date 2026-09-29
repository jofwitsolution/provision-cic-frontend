import Navbar from "../../components/navigations/Navbar";
import AboutHero from "./AboutHero";
import OurObjeective from "./OurObjeective";
import OurMission from "./OurMission";
import OurCoreValues from "./OurCoreValues";
import GoFundMeSection from "@/components/GoFundMeSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurCoreValues />
      <OurMission />
      <OurObjeective />
      {/* <LatestEvent /> */}
      <GoFundMeSection />
      <Footer />
    </>
  );
};

export default About;
