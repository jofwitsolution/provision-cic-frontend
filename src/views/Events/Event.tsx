import Footer from "../../components/Footer";
import EventHero from "./EventHero";
import EventItems from "./EventItems";
import JoinProvision from "@/components/JoinProvision";
import Navbar from "@/components/navigations/Navbar";

const Event = () => {
  return (
    <>
      <Navbar />
      <EventHero />
      <EventItems />
      <JoinProvision />
      <Footer />
    </>
  );
};

export default Event;
