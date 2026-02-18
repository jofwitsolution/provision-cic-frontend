import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactHero from "./ContactHero";
import Footer from "../../components/Footer";
import Navbar from "@/components/navigations/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
