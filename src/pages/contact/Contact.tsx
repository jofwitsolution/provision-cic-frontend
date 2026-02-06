import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactHero from "./ContactHero";
import Footer from "../../components/Footer";
import Navbar from "@/components/navigations/Navbar";
import JoinProvision from "@/components/JoinProvision";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default Contact;
