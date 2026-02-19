import Navbar from "@/components/navigations/Navbar";
import AccommodationHero from "./AccommodationHero";
import OurAccommodation from "./OurAccommodation";
import AccommodationProvides from "./AccommodationProvides";

import Footer from "../../components/Footer";
import JoinProvision from "@/components/JoinProvision";
import Meta from "@/components/shared/Meta";

const Accommodation = () => {
  return (
    <>
      <Meta
        title="Accommodation - ProVision Support Services CIC"
        description="Explore the accommodation options provided by ProVision Support Services CIC."
      />
      <Navbar />
      <AccommodationHero />
      <OurAccommodation />
      <AccommodationProvides />
      <JoinProvision />
      <Footer />
    </>
  );
};

export default Accommodation;
