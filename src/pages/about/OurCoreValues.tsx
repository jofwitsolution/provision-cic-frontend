import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Handshake,
  KeyRound,
  Leaf,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";

type CoreValue = {
  id: number;
  title: string;
  content: string;
  icon: LucideIcon;
  bar: string;
  chip: string;
};

const coreValues: CoreValue[] = [
  {
    id: 1,
    title: "Person-Led",
    content:
      "Support is built around the person, not around the building or the rota. We start with what someone wants their life to look like, and we plan backwards from there. Preferences, routines and goals belong to the person; our job is to make the accommodation and the support fit them.",
    icon: UserRound,
    bar: "bg-[#e08a3c]",
    chip: "bg-[#fdebd4] text-[#8a3f10]",
  },
  {
    id: 2,
    title: "Independence by Design",
    content:
      "Everything we do is aimed at the day someone no longer needs us. We build life skills, tenancy confidence and practical independence into daily support rather than treating them as an add-on. Progress is the point, and we measure ourselves on it.",
    icon: KeyRound,
    bar: "bg-[#c9722c]",
    chip: "bg-[#f9dec7] text-[#7a3f14]",
  },
  {
    id: 3,
    title: "Honest Partnership",
    content:
      "We are straightforward with the people we support, with referring professionals, and with the property owners we work alongside. That means clear terms, realistic timescales, and telling people what we can't do as readily as what we can. If a placement isn't right, we say so early.",
    icon: Handshake,
    bar: "bg-[#b8622a]",
    chip: "bg-[#f7e1cf] text-[#8a3f10]",
  },
  {
    id: 4,
    title: "Consistent Practice",
    content:
      "Good support is reliable support. We train our team properly, keep records that stand up to scrutiny, and review how we work rather than assuming it's working. Where practice falls short, we fix it and record what changed.",
    icon: ClipboardCheck,
    bar: "bg-[#a9552a]",
    chip: "bg-[#fbe1d1] text-[#7a3f14]",
  },
  {
    id: 5,
    title: "Responsible Stewardship",
    content:
      "We look after the homes in our care and the resources we're trusted with. That means proper maintenance, energy-conscious housing, and reinvesting what we generate into more and better provision — not extracting value from it.",
    icon: Leaf,
    bar: "bg-[#98552b]",
    chip: "bg-[#f5d7c5] text-[#7a3f14]",
  },
  {
    id: 6,
    title: "Integrity",
    content:
      "We operate honestly, treat people fairly, and hold ourselves to the same standards in private that we describe in public. As a Community Interest Company our assets are locked to community benefit, and that constraint is one we chose.",
    icon: ShieldCheck,
    bar: "bg-[#934713]",
    chip: "bg-[#f6e4d5] text-[#7a3f14]",
  },
];

const OurCoreValues = () => {
  return (
    <section className="font-DM-Sans relative overflow-hidden bg-[#fdf9f5] py-14 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,71,19,0.07),transparent_60%)]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-[#f6e4d5]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#f2d9c2]/60 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-300 px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-180 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#e4c9b2] bg-[#f7ede3] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7a3f14] md:text-xs">
            What We Stand For
          </span>
          <h2 className="mt-4 text-[26px] font-semibold leading-tight text-[#3f2b1d] md:text-4xl lg:text-[40px]">
            Our Core Values
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#2e2a28]/80 md:text-base md:leading-8">
            ProVision Support Services CIC is a community-interest organisation
            providing inclusive, person-centred supported living solutions. We
            support individuals with diverse needs to live safely,
            independently, and with dignity in accommodation tailored to their
            preferences and goals.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {coreValues.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#edd8c1] bg-white p-6 pt-7 shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#e0bd9c] hover:shadow-[0_25px_45px_rgba(147,71,19,0.14)] md:p-7 md:pt-8"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1.5 opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${value.bar}`}
                />
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 text-4xl font-bold tabular-nums text-[#934713]/10 md:text-5xl"
                >
                  {String(value.id).padStart(2, "0")}
                </span>

                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 md:h-14 md:w-14 ${value.chip}`}
                >
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className="h-6 w-6 md:h-7 md:w-7"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#3f2b1d] md:text-xl">
                  {value.title}
                </h3>
                <p className="mt-2.5 text-sm leading-7 text-[#2e2a28]/85 md:text-[15px]">
                  {value.content}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurCoreValues;
