import { faqs } from "@/lib/data";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const faqItemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const answerVariants: Variants = {
    collapsed: { opacity: 0, height: 0, marginTop: 0 },
    expanded: {
      opacity: 1,
      height: "auto",
      marginTop: 16,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-[#f9f3ef] via-white to-[#f6e4d5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-[#f9f3ef] rounded-full p-4 border-2 border-[#e4c9b2]">
              <HelpCircle className="w-8 h-8 text-primary-100" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-mogra">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about ProVision Support Service,
            our services, and how we can help you.
          </p>
        </motion.div>

        {/* FAQ Items Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={faqItemVariants}
              className="bg-white rounded-2xl border-2 border-[#edd8c1] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_15px_40px_rgba(147,71,19,0.15)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-start justify-between cursor-pointer hover:bg-[#f9f3ef] transition-colors duration-200"
              >
                <span className="flex-1 text-left">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 text-left">
                    {faq.question}
                  </h3>
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="ml-4 shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-primary-100 font-bold" />
                </motion.div>
              </button>

              {/* Answer Section */}
              <AnimatePresence mode="wait">
                {openIndex === index && (
                  <motion.div
                    variants={answerVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="px-6 md:px-8 overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className="pb-6 border-t-2 border-[#e4c9b2] pt-4"
                    >
                      <p className="text-gray-700 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-10 bg-linear-to-r from-primary-100 to-[#7a3f14] rounded-3xl border-2 border-[#b8582c] shadow-[0_20px_40px_rgba(147,71,19,0.3)]"
        >
          <div className="flex items-start gap-4 md:gap-6">
            <div className="shrink-0">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Didn't find your answer?
              </h3>
              <p className="text-[#f9f3ef] text-lg mb-5">
                Contact our support team for more information about our services
                and how we can assist you.
              </p>
              <button className="px-6 py-3 bg-white text-primary-100 font-semibold rounded-xl hover:bg-[#f9f3ef] transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            Still have questions? Reach out to us at{" "}
            <span className="text-primary-100 font-semibold">
              info@provisionsupportservice.co.uk
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Faqs;
