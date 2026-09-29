import Image from "next/image";
import { aspectStyle } from "@/lib/utils";
import Link from "next/link";

import img1 from "../../assets/images/home-hero-coventry.png";
import img2 from "../../assets/images/home-hero-main.png";
import img3 from "../../assets/images/home-hero-living-space.png";
import img4 from "../../assets/images/home-hero-accommodation.png";
import img5 from "../../assets/images/home-hero-independent-living.png";
import img6 from "../../assets/images/home-hero-community.png";

// Tile widths from the .hero-grid columns in App.css (2 → 3 → 6 columns, max 1100px)
const tileSizes = "(min-width: 1024px) 190px, (min-width: 640px) 33vw, 50vw";
const largeTileSizes =
  "(min-width: 1024px) 370px, (min-width: 640px) 66vw, 100vw";

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

        <Link href="/contact" className="hero-fade-up hero-fade-up-delay-3">
          <button className="hero-cta">Get in Touch</button>
        </Link>

        <div className="hero-grid hero-fade-up hero-fade-up-delay-4">
          <div className="hero-tile hero-hide-mobile hero-tilt-left">
            <Image
              src={img1}
              style={aspectStyle(img1)}
              alt="Community home exterior"
              sizes={tileSizes}
              loading="eager"
            />
          </div>

          <div className="hero-tile hero-tile-large">
            <Image
              src={img2}
              style={aspectStyle(img2)}
              alt="Warm and welcoming property"
              sizes={largeTileSizes}
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="hero-tile hero-tilt-right">
            <Image
              src={img3}
              style={aspectStyle(img3)}
              alt="Supportive living space"
              sizes={tileSizes}
              loading="eager"
            />
          </div>

          <div className="hero-tile">
            <Image
              src={img4}
              style={aspectStyle(img4)}
              alt="Care-focussed accommodation"
              sizes={tileSizes}
              loading="eager"
            />
          </div>

          <div className="hero-tile hero-hide-mobile hero-tilt-left">
            <Image
              src={img5}
              style={aspectStyle(img5)}
              alt="Independent living moment"
              sizes={tileSizes}
            />
          </div>

          <div className="hero-tile hero-hide-mobile">
            <Image
              src={img6}
              style={aspectStyle(img6)}
              alt="Provision community snapshot"
              sizes={tileSizes}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcometoProvision;
