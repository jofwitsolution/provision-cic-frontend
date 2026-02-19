import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactHero from "./ContactHero";
import Footer from "../../components/Footer";
import Navbar from "@/components/navigations/Navbar";
import Meta from "@/components/shared/Meta";

const Contact = () => {
  return (
    <>
      <Meta
        title="Contact Us - ProVision Support Services CIC"
        description="Get in touch with ProVision Support Services CIC."
      />
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
