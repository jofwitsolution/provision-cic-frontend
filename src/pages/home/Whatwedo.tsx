import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import frame11 from "../../assets/images/Frame 11.png";
import frame12 from "../../assets/images/Frame 11 (1).png";
import frame13 from "../../assets/images/Frame 11 (3).png";

const Whatwedo = () => {
  const services = [
    {
      title: "Our Accommodation",
      description:
        "We provide outstanding guest experiences with well-maintained properties, attentive support, and local insight.",
      image: frame11,
      link: "/accommodation",
    },
    {
      title: "Support Service",
      description:
        "We help individuals maintain tenancy and prepare for self-sufficient living with tailored, inclusive support.",
      image: frame12,
      link: "/support",
    },
    {
      title: "Communities",
      description:
        "Our community development is guided by integrity and transparency, creating lasting, positive change.",
      image: frame13,
      link: "/support",
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.12,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff9f3_0%,#ffffff_60%)] py-14 font-['DM_Sans',sans-serif] md:py-20">
      <div className="pointer-events-none absolute -left-24 top-14 h-52 w-52 rounded-full bg-[#f6e4d5] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-[#f2d9c2] blur-3xl" />

      <motion.div
        className="mx-auto w-full max-w-300 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={item}
          className="mx-auto mb-10 max-w-190 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#e4c9b2] bg-[#f7ede3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a3f14]">
            Provision CIC Services
          </span>
          <h2 className="mt-4 text-2xl font-semibold text-[#3f2b1d] md:text-4xl">
            What We Do
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#3f2b1d]/80 md:text-base">
            A focused set of services designed to help people thrive, live
            independently, and feel supported at every step.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={item}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#edd8c1] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_50px_rgba(0,0,0,0.12)]"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2f1c0f]/55 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-5 pb-6 pt-5">
                <h3 className="text-lg font-semibold text-[#3f2b1d]">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-[#2e2a28]">
                  {service.description}
                </p>
                <div className="mt-auto flex justify-start">
                  <Link to={service.link}>
                    <Button text="Learn More" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Whatwedo;
