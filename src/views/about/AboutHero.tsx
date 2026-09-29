"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import supportworker from "../../assets/images/hero-about.png";

// const stats = [
//   { label: "Supported Residents", value: "150+" },
//   { label: "Local Partnerships", value: "25" },
//   { label: "Years Serving Coventry", value: "12" },
// ];

const AboutHero = () => {
  return (
    <section className="relative isolate flex min-h-80 items-center justify-center overflow-hidden bg-black/20 md:min-h-[80vh]">
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src={supportworker}
        alt=""
        sizes="100vw"
        preload
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-[#421e0c]/70 to-[#120703]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center text-white md:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-xs uppercase tracking-[0.35em]"
        >
          Our Story
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-Mogra text-3xl leading-tight md:text-6xl"
        >
          About Us: Our Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-['DM Sans'] text-sm leading-relaxed text-white/90 md:text-xl"
        >
          ProVision Support Services CIC is a community-interest organisation
          providing inclusive, person-centred supported living. We empower
          individuals of diverse needs to live safely, independently, and with
          dignity in homes tailored to their goals.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 text-xs md:text-base">
          <Link href="/contact">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl bg-white/90 px-6 py-2 font-semibold text-primary-100 shadow-[0_15px_30px_rgba(0,0,0,0.25)] md:px-10 md:py-4"
            >
              Get in Touch
            </motion.button>
          </Link>
          <Link href="/referrals">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl border border-white/60 px-6 py-2 font-semibold text-white md:px-10 md:py-4"
            >
              Refer Someone
            </motion.button>
          </Link>
        </div>
        {/* 
        <div className="mt-4 grid w-full gap-3 text-left text-white/80 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-center backdrop-blur-md"
            >
              <p className="text-2xl font-semibold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </motion.div>
    </section>
  );
};

export default AboutHero;
