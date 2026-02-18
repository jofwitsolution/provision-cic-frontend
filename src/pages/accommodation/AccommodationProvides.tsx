import { motion, type Variants } from "framer-motion";
import image1 from "../../assets/icons/fluent-mdl2_commitments.png";
import image2 from "../../assets/icons/eos-icons_trusted-organization.png";
import image3 from "../../assets/icons/mdi_finance.png";
import image4 from "../../assets/icons/fluent_people-team-20-filled.png";

const accoProvd = [
  {
    image: image1,
    title: "Your Commitment",
    content:
      "Adherence to our standards and House Rules ensures continuity. We expect a minimum tenure of 9 months, during which we work collaboratively to help you achieve your personalised Support Plan objectives.",
    accent: "from-[#f9dec7]",
  },
  {
    image: image2,
    title: "Our Promise to You",
    content:
      "Upon completing your Support Plan, we secure independent accommodation for you—rental or council properties. Your successful transition to stable, independent living is our commitment.",
    accent: "from-[#fdebd4]",
  },
  {
    image: image3,
    title: "Financial Support",
    content:
      "We acknowledge financial barriers to housing. Your Support Worker collaborates with you to explore viable strategies, ensuring you have the resources needed to thrive.",
    accent: "from-[#f7e1cf]",
  },
  {
    image: image4,
    title: "We're Here for You",
    content:
      "We're your partner on the journey to self-sufficient living. More than a landlord—a supporter. We create an environment that empowers you to achieve goals and embrace a brighter future.",
    accent: "from-[#fbe1d1]",
  },
];

const AccommodationProvides = () => {
  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 font-['DM Sans',sans-serif] md:py-24">
      <div className="pointer-events-none absolute -left-20 top-20 h-48 w-48 rounded-full bg-[#f6e4d5]/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-[#f2d9c2]/40 blur-3xl" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-300 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={item}
          className="mx-auto mb-12 max-w-190 text-center"
        >
          <h2 className="text-2xl font-semibold text-[#3f2b1d] md:text-4xl">
            What ProVision Provides
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#2e2a28]/80 md:text-base">
            A complete support ecosystem designed around your goals—commitment,
            promise, financial guidance, and partnership.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {accoProvd.map((card, index) => (
            <motion.article
              key={index}
              variants={item}
              className={`group relative overflow-hidden rounded-3xl border border-[#edd8c1] bg-linear-to-br ${card.accent} to-white p-6 shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_25px_45px_rgba(0,0,0,0.12)]`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative z-10 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-primary-100/10 p-3">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold text-[#3f2b1d]">
                  {card.title}
                </h3>

                <p className="text-sm leading-7 text-[#2e2a28]/90">
                  {card.content}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AccommodationProvides;
