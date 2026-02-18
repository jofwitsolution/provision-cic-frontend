import Navbar from "@/components/navigations/Navbar";
import AccommodationHero from "./AccommodationHero";
import OurAccommodation from "./OurAccommodation";
import AccommodationProvides from "./AccommodationProvides";

import Footer from "../../components/Footer";
import JoinProvision from "@/components/JoinProvision";

const Accommodation = () => {
  return (
    <div>
      <Navbar />
      <AccommodationHero />
      <OurAccommodation />
      <AccommodationProvides />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default Accommodation;
