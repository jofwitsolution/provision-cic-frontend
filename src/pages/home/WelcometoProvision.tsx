import { Link } from "react-router-dom";

import img1 from "../../assets/images/coventry-f6acc2bd 1 (1).png";
import img2 from "../../assets/images/home-hero-big-fa694ebf 1 (1).png";
import img3 from "../../assets/images/download 2 (1).png";
import img4 from "../../assets/images/download 1 (1).png";
import img5 from "../../assets/images/Frame 6.png";
import img6 from "../../assets/images/Frame 11 (4).png";

import { motion } from "framer-motion";

/* Parent controls stagger timing */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* Each image slides up individually */
const imageVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WelcometoProvision = () => {
  return (
    <div className=" flex flex-col items-center gap-5 px-0 pb-2.5 pt-[60px] md:gap-5 md:pb-2.5 md:pt-15">
      <h3 className="px-5 text-center font-['Mogra',system-ui] text-[23px] font-normal text-primary-100 md:px-10 md:text-[29px]">
        Welcome to Provision CIC
      </h3>

      <p className="max-w-250 px-5 text-center font-DM-Sans text-base text-black md:mb-5 md:px-10 md:text-[23px] md:font-normal">
        Our core ethos centers on the well-being of individuals. This is evident
        in our dedication to providing safe, high-quality homes and supporting
        people in their journey toward greater independence.
      </p>

      <Link to="/contact">
        <button className="cursor-pointer rounded-[3px] border-none bg-[#934713] px-5 py-2 text-white outline-none min-[415px]:w-[150px] min-[415px]:rounded-[10px] min-[415px]:px-0 min-[415px]:py-2.5 min-[415px]:text-lg md:mb-5 md:w-[250px] md:gap-[15px] md:rounded-[15px] md:px-10 md:py-5 md:text-[25px]">
          Get in Touch
        </button>
      </Link>

      {/* STAGGERED IMAGE ANIMATION */}
      <motion.div
        className="m-0 mt-[30px] grid w-[95%] grid-cols-4 justify-center gap-[5px] overflow-hidden p-0 min-[415px]:gap-2.5 md:grid-cols-6 md:gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="mt-[30px] md:mt-10" variants={imageVariants}>
          <img src={img1} alt="" className="w-full rounded-[10px]" />
        </motion.div>

        <motion.div variants={imageVariants}>
          <img src={img2} alt="" className="w-full rounded-[10px]" />
        </motion.div>

        <motion.div className="mt-[30px] md:mt-10" variants={imageVariants}>
          <img src={img3} alt="" className="w-full rounded-[10px]" />
        </motion.div>

        <motion.div variants={imageVariants}>
          <img src={img4} alt="" className="w-full rounded-[10px]" />
        </motion.div>

        <motion.div
          className="mt-[30px] hidden md:mt-10 md:block"
          variants={imageVariants}
        >
          <img src={img5} alt="" className="w-full rounded-[10px]" />
        </motion.div>

        <motion.div className="hidden md:block" variants={imageVariants}>
          <img src={img6} alt="" className="w-full rounded-[10px]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WelcometoProvision;
