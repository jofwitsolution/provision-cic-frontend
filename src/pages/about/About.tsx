import Navbar from "../../components/navigations/Navbar";
import AboutHero from "./AboutHero";
import OurObjeective from "./OurObjeective";
import OurMission from "./OurMission";
import OurCoreValues from "./OurCoreValues";
import Footer from "@/components/Footer";
import Meta from "@/components/shared/Meta";

const About = () => {
  return (
    <>
      <Meta
        title="About Us - ProVision Support Services CIC"
        description="Learn more about ProVision Support Services CIC."
      />
      <Navbar />
      <AboutHero />
      <OurCoreValues />
      <OurMission />
      <OurObjeective />
      {/* <LatestEvent /> */}
      <Footer />
    </>
  );
};

export default About;
