import Navbar from "@/components/navigations/Navbar";
import AccomodationHero from "./AccomodationHero";
import OurAccomodation from "./OurAccomodation";
import AccomodationProvides from "./AccomodationProvides";

import Footer from "../../components/Footer";
import JoinProvision from "@/components/JoinProvision";

const Accomodation = () => {
  return (
    <div>
      <Navbar />
      <AccomodationHero />
      <OurAccomodation />
      <AccomodationProvides />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default Accomodation;
