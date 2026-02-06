import Footer from "../../components/Footer";
import EventHero from "./EventHero";
import EventItems from "./EventItems";
import JoinProvision from "@/components/JoinProvision";
import Navbar from "@/components/navigations/Navbar";

const Event = () => {
  return (
    <div>
      <Navbar />
      <EventHero />
      <EventItems />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default Event;
