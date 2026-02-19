import Meta from "@/components/shared/Meta";
import Footer from "../../components/Footer";
import EventHero from "./EventHero";
import EventItems from "./EventItems";
import JoinProvision from "@/components/JoinProvision";
import Navbar from "@/components/navigations/Navbar";

const Event = () => {
  return (
    <>
      <Meta
        title="Events & News - ProVision Support Services CIC"
        description="Discover the latest events & news hosted by ProVision Support Services CIC. Join us for informative sessions, workshops, and community gatherings focused on accommodation and support services. Stay updated on upcoming events and connect with our community."
      />
      <Navbar />
      <EventHero />
      <EventItems />
      <JoinProvision />
      <Footer />
    </>
  );
};

export default Event;
