import { motion, type Variants } from "framer-motion";
import maskedgroup from "../../assets/images/house-1.jpg";
import maskedgroup2 from "../../assets/images/house-3.jpg";

const OurAccommodation = () => {
  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 font-['DM Sans',sans-serif] md:py-24">
      <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-[#f6e4d5]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-20 h-56 w-56 rounded-full bg-[#f2d9c2]/50 blur-3xl" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-300 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Header */}
        <motion.div
          variants={item}
          className="mx-auto mb-12 max-w-190 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#e4c9b2] bg-[#f7ede3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a3f14]">
            Safe, Dignified Living
          </span>
          <h2 className="mt-4 text-2xl font-semibold text-[#3f2b1d] md:text-4xl">
            Our Accommodation
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#3f2b1d]/80 md:text-base">
            Thoughtfully designed homes that balance independence with community
            support, ensuring every resident feels safe, valued, and empowered.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
          {/* Feature 1 */}
          <motion.article
            variants={item}
            className="flex flex-col gap-6 md:order-1"
          >
            <div className="overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={maskedgroup}
                alt="Community accommodation space"
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="text-sm leading-8 text-[#2e2a28] md:text-base">
              Our strategically located accommodations are designed to meet the
              unique requirements of our residents. Embracing communal living,
              residents share essential facilities like kitchens and bathrooms
              while enjoying private bedrooms and well-maintained communal
              spaces. This approach ensures affordable living while fostering
              community and mutual support.
            </p>
          </motion.article>

          {/* Feature 2 */}
          <motion.article
            variants={item}
            className="flex flex-col gap-6 md:order-2"
          >
            <div className="overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={maskedgroup2}
                alt="Home amenities and facilities"
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="text-sm leading-8 text-[#2e2a28] md:text-base">
              Each home is equipped with essential amenities and accessibility
              features to support independent living. We maintain high standards
              of cleanliness and safety, with responsive support staff available
              to residents. Our spaces are designed to encourage personal
              autonomy while ensuring help is always within reach.
            </p>
          </motion.article>
        </div>

        {/* Key Features */}
        <motion.div variants={item} className="mt-12 grid gap-3 md:grid-cols-3">
          {[
            "Communal spaces for connection",
            "Private, secure bedrooms",
            "24/7 responsive support",
          ].map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-[#edd8c1] bg-[#f9f3ef] px-4 py-3.5 text-center text-sm font-medium text-[#5a2d0f]"
            >
              {feature}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurAccommodation;
