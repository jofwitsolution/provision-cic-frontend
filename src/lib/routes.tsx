import Home from "@/pages/home/Home";
import About from "..//pages/about/About";
import { Routes, Route } from "react-router-dom";
import Accomodation from "@/pages/accomodation/Accomodation";
import Contact from "@/pages/contact/Contact";
import Support from "@/pages/support/Support";
import Referrals from "@/pages/referrals/Referrals";
import Event from "@/pages/Events/Event";
import EventDetails from "@/pages/EventDetails/EventDetails";

export const navbarRoutes = [
  { label: "About", route: "/about" },
  { label: "Accomodation", route: "/accomodation" },
  { label: "Support", route: "/support" },
  { label: "Events", route: "/events" },
  { label: "Refrrals", route: "/referrals" },
];

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
      <Route path="/Events" element={<Event />} />
      <Route path="/Referrals" element={<Referrals />} />
      <Route path="/accomodation" element={<Accomodation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="events/:id" element={<EventDetails />} /> 
    </Routes>
  );
};

export default AppRoutes;
