import { Link } from "react-router-dom";

import img1 from "../../assets/images/coventry-f6acc2bd 1 (1).png";
import img2 from "../../assets/images/home-hero-big-fa694ebf 1 (1).png";
import img3 from "../../assets/images/download 2 (1).png";
import img4 from "../../assets/images/download 1 (1).png";
import img5 from "../../assets/images/Frame 6.png";
import img6 from "../../assets/images/Frame 11 (4).png";

const WelcometoProvision = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(147,71,19,0.12),transparent_60%)] px-4 pb-10 pt-16 md:pb-16 md:pt-20">
      <div className="hero-orbit hero-orbit-1" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-2" aria-hidden="true" />

      <div className="mx-auto flex max-w-300 flex-col items-center gap-6 text-center">
        <span className="hero-pill hero-fade-up">Community-first housing</span>

        <h1 className="hero-title hero-fade-up hero-fade-up-delay-1">
          Welcome to ProVision CIC
        </h1>

        <p className="hero-copy hero-fade-up hero-fade-up-delay-2">
          Our core ethos centers on the well-being of individuals. This is
          evident in our dedication to providing safe, high-quality homes and
          supporting people in their journey toward greater independence.
        </p>

        <Link to="/contact" className="hero-fade-up hero-fade-up-delay-3">
          <button className="hero-cta">Get in Touch</button>
        </Link>

        <div className="hero-grid hero-fade-up hero-fade-up-delay-4">
          <div className="hero-tile hero-hide-mobile hero-tilt-left">
            <img src={img1} alt="Community home exterior" />
          </div>

          <div className="hero-tile hero-tile-large">
            <img src={img2} alt="Warm and welcoming property" />
          </div>

          <div className="hero-tile hero-tilt-right">
            <img src={img3} alt="Supportive living space" />
          </div>

          <div className="hero-tile">
            <img src={img4} alt="Care-focussed accommodation" />
          </div>

          <div className="hero-tile hero-hide-mobile hero-tilt-left">
            <img src={img5} alt="Independent living moment" />
          </div>

          <div className="hero-tile hero-hide-mobile">
            <img src={img6} alt="Provision community snapshot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcometoProvision;
