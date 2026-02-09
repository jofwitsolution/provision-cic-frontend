import "./App.css";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/home/Home.tsx";
import About from "./pages/about/About.tsx";
import Support from "./pages/support/Support.tsx";
import Event from "./pages/Events/Event.tsx";
import Referrals from "./pages/referrals/Referrals.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Accomodation from "./pages/accomodation/Accomodation.tsx";
import EventDetails from "./pages/EventDetails/EventDetails.tsx";

import Faq from "./pages/Faq/Faq.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.tsx";
import TermsAndCondition from "./pages/TermsAndCondition/TermsAndCondition.tsx";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/Events" element={<Event />} />
        <Route path="/Referrals" element={<Referrals />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="events/:id" element={<EventDetails />} />
        <Route path="faq" element={<Faq />} />
        <Route path="termsandcondition" element={<TermsAndCondition />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
