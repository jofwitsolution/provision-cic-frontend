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
import Accommodation from "./pages/accommodation/Accommodation.tsx";
import EventDetails from "./pages/EventDetails/EventDetails.tsx";

import Faq from "./pages/Faq/Faq.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.tsx";
import TermsAndCondition from "./pages/TermsAndCondition/TermsAndCondition.tsx";
import TawkTo from "./components/TawkTo.tsx";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const tawkPropertyId = import.meta.env.VITE_TAWK_PROPERTY_ID;
  const tawkWidgetId = import.meta.env.VITE_TAWK_WIDGET_ID;

  return (
    <>
      {/* Tawk.to Live Chat Widget */}
      {tawkPropertyId && tawkWidgetId && (
        <TawkTo propertyId={tawkPropertyId} widgetId={tawkWidgetId} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/events" element={<Event />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events/:slug" element={<EventDetails />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
