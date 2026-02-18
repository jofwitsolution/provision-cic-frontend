import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import areaImg1 from "../../assets/images/coventry-f6acc2bd 2.png";
import areaImg2 from "../../assets/images/image 1.png";

const Whereweoperate = () => {
  const areas = [
    {
      image: areaImg1,
      heading: "Coventry City",
      description:
        "ProVision Support Services CIC provides supported living and person-centred care across Coventry City. We work closely with individuals, families, and local partners to deliver safe, inclusive, high-quality support.",
      bullets: [
        "Person-centred care",
        "Local partnerships",
        "Safe & inclusive",
        "High-quality practice",
      ],
    },
    {
      image: areaImg2,
      heading: "Neighbourhood Partnerships",
      description:
        "Our collaborative network ensures residents feel connected and secure while achieving their goals in a supported and empowering environment.",
      bullets: [
        "Trusted local teams",
        "Responsive support",
        "Accessible pathways",
        "Long-term wellbeing",
      ],
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[url(/img/shape-background.png)] bg-cover bg-no-repeat px-4 font-DM-Sans md:px-10 pb-10 md:pb-24 lg:px-20 pt-68 md:pt-86">
      <motion.div
        className="relative mx-auto w-full max-w-300"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={item}
          className="mx-auto mb-12 max-w-190 text-center"
        >
          <span className="max-sm:hidden inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Coventry Supported Living Services
          </span>
          <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
            Where We Operate
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
            We work across Coventry with local partners to deliver consistent,
            high-quality supported living services.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {areas.map((area, index) => (
            <motion.article
              key={area.heading}
              variants={item}
              className={`grid items-center gap-6 rounded-3xl border border-white/10 bg-white/90 p-5 shadow-[0_25px_45px_rgba(0,0,0,0.2)] md:p-8 lg:grid-cols-[1.1fr_0.9fr] ${
                index % 2 === 1 ? "lg:grid-cols-[0.9fr_1.1fr]" : ""
              }`}
            >
              <div
                className={`space-y-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <h3 className="text-lg font-semibold text-[#3f2b1d] md:text-2xl">
                  {area.heading}
                </h3>
                <p className="text-sm leading-7 text-[#2e2a28] md:text-base">
                  {area.description}
                </p>
                <ul className="grid gap-2 text-sm text-[#5a2d0f] md:grid-cols-2">
                  {area.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-full border border-[#edd8c1] bg-[#fff4ea] px-3 py-2 text-center"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link to="/support">
                    <button className="rounded-xl bg-primary-100 px-4 py-2 text-xs font-semibold text-white shadow-[0_16px_26px_rgba(147,71,19,0.3)] transition hover:-translate-y-0.5 md:text-sm">
                      Get Support
                    </button>
                  </Link>
                  <Link to="/referrals">
                    <button className="rounded-xl border border-primary-100 px-4 py-2 text-xs font-semibold text-primary-100 transition hover:bg-primary-100/10 md:text-sm">
                      Refer Someone
                    </button>
                  </Link>
                </div>
              </div>
              <div
                className={`overflow-hidden rounded-2xl shadow-[0_18px_32px_rgba(0,0,0,0.18)] ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={area.image}
                  alt={area.heading}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div variants={item} className="mt-12 text-center text-white">
          <h4 className="text-sm font-semibold md:text-xl">
            Refer someone who needs support — we will take it from here
          </h4>
          <p className="mt-2 text-xs text-white/80 md:text-base">
            ProVision Support Services CIC
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Whereweoperate;
