import { motion } from "framer-motion";

const objectives = [
  {
    title: "Tailored Support",
    description:
      "Deliver plans that reflect every individual’s unique strengths, needs, and aspirations.",
    accent: "TailoredSupport",
  },
  {
    title: "Independent Living",
    description:
      "Promote independence, wellbeing, and personal growth with person-centred care.",
    accent: "IndependentLiving",
  },
  {
    title: "Community Partnerships",
    description:
      "Build strong relationships with families, professionals, and local partners.",
    accent: "CommunityPartnerships",
  },
  {
    title: "Dignity & Safeguarding",
    description:
      "Uphold dignity, respect, and safety in every interaction and service.",
    accent: "DignitySafeguarding",
  },
  {
    title: "Continuous Improvement",
    description:
      "Evolve through learning, feedback, and best practices to exceed standards.",
    accent: "ContinuousImprovement",
  },
];

const objectiveAccent = {
  TailoredSupport: "bg-[#f9dec7]",
  IndependentLiving: "bg-[#fdebd4]",
  CommunityPartnerships: "bg-[#f7e1cf]",
  DignitySafeguarding: "bg-[#fbe1d1]",
  ContinuousImprovement: "bg-[#f5d7c5]",
};

const OurObjeective = () => {
  return (
    <section className="relative overflow-hiddenbg-[radial-gradient(circle_at_top,rgba(147,71,19,0.08),transparent_60%)] py-16 font-['DM Sans',sans-serif] md:py-24">
      <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-[#f6e4d5]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-[#f2d9c2]/60 blur-3xl" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-275 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto mb-10 max-w-180 text-center">
          <span className="inline-flex items-center rounded-full border border-[#e4c9b2] bg-[#f7ede3] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#7a3f14]">
            Our Objectives
          </span>
          <h2 className="mt-4 text-2xl font-semibold text-[#3f2b1d] md:text-4xl">
            Anchored in care, driven by results
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#2e2a28]/80 md:text-base">
            Each commitment is a promise to the people we serve—creating safer,
            more independent lives through thoughtful support and community
            partnership.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <motion.article
              key={objective.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-[#edd8c1] bg-white p-6 shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_25px_45px_rgba(0,0,0,0.12)]"
            >
              <div
                className={`absolute inset-x-4 top-4 h-1 rounded-full opacity-80 group-hover:opacity-100 transition ${objectiveAccent[objective.accent as keyof typeof objectiveAccent]}`}
              />
              <div className="mt-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-[#3f2b1d]">
                  {objective.title}
                </h3>
                <p className="text-sm leading-7 text-[#2e2a28]/90">
                  {objective.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurObjeective;
