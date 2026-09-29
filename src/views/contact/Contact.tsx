import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactHero from "./ContactHero";
import GoFundMeSection from "@/components/GoFundMeSection";
import Footer from "../../components/Footer";
import Navbar from "@/components/navigations/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <GoFundMeSection />
      <Footer />
    </>
  );
};

export default Contact;
