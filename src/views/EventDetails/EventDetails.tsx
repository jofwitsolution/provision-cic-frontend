import Footer from "../../components/Footer";
import EventDetailsInfo from "./EventDetailsInfo";
import Navbar from "@/components/navigations/Navbar";

const EventDetails = ({ slug }: { slug: string }) => {
  return (
    <div>
      <Navbar />
      <EventDetailsInfo slug={slug} />
      <Footer />
    </div>
  );
};

export default EventDetails;
