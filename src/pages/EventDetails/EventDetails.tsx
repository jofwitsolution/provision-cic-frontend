import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import EventDetailsInfo from "./EventDetailsInfo";
import Navbar from "@/components/navigations/Navbar";

const EventDetails = () => {
  return (
    <div>
      <Navbar />
      <EventDetailsInfo />
      <Footer />
    </div>
  );
};

export default EventDetails;
