import { motion, type Variants } from "framer-motion";
import {
  Home,
  DollarSign,
  Users,
  AlertCircle,
  Shield,
  Zap,
  Trash2,
  Lock,
  Car,
  FileText,
  Clock,
  CheckCircle,
} from "lucide-react";

const Terms = () => {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const terms = [
    {
      number: 1,
      title: "Charges",
      icon: DollarSign,
      description:
        "The Licensee agrees to pay the licence charge weekly and in advance.",
    },
    {
      number: 2,
      title: "Use of the Accommodation",
      icon: Home,
      description:
        "The accommodation shall be used solely for residential purposes and not for any illegal activities.",
    },
    {
      number: 3,
      title: "Support",
      icon: Users,
      description:
        "The Licensee acknowledges ProVision Support Service's commitment to providing Supported Housing. The Licensee agrees to cooperate with ProVision Support Service and its agents by accepting offered support and complying with reasonable requirements. In cases where ProVision Support Service determines that support is no longer needed, the Licensee agrees to actively seek alternative accommodation.",
    },
    {
      number: 4,
      title: "Change of Rooms",
      icon: Home,
      description:
        "The Licensee shall use the room nominated by ProVision Support Service and be prepared to change rooms when required.",
    },
    {
      number: 5,
      title: "Nuisance",
      icon: AlertCircle,
      description:
        "The Licensee shall not cause or allow visitors to cause a nuisance or annoyance to other residents, staff, contractors, or neighbours.",
    },
    {
      number: 6,
      title: "Racial and Other Harassment",
      icon: Shield,
      description:
        "The Licensee shall not commit or allow visitors to commit harassment on the grounds of race, colour, religion, sex, sexual orientation, age, or disability that may interfere with the peace and comfort of others.",
    },
    {
      number: 7,
      title: "Disruption",
      icon: AlertCircle,
      description:
        "The Licensee shall not engage in acts that disrupt other residents' peaceful occupancy or cause harm to individuals.",
    },
    {
      number: 8,
      title: "Illegal Drugs",
      icon: Shield,
      description:
        "The Licensee shall not possess, use, supply, or allow others to possess, use, or supply illegal drugs on the premises.",
    },
    {
      number: 9,
      title: "Noise",
      icon: Zap,
      description:
        "The Licensee shall not create excessive noise that causes a nuisance or annoyance to others.",
    },
    {
      number: 10,
      title: "Health & Safety",
      icon: Shield,
      description:
        "The Licensee shall comply with health, safety, and fire instructions provided by ProVision Support Service.",
    },
    {
      number: 11,
      title: "Security",
      icon: Lock,
      description:
        "The Licensee is responsible for ensuring the security of the property, including locking doors and windows when both in and out of the building.",
    },
    {
      number: 12,
      title: "Pets",
      icon: AlertCircle,
      description:
        "The Licensee shall not keep any animals, birds, fish, or reptiles on the premises.",
    },
    {
      number: 13,
      title: "Cleanliness & Damage",
      icon: Home,
      description:
        "The Licensee shall maintain the accommodation in a clean and tidy state. The Licensee is liable to pay for any damage caused to the building, fixtures, fittings, furnishings, or common areas by themselves or their visitors, except for fair wear and tear.",
    },
    {
      number: 14,
      title: "Rubbish Disposal",
      icon: Trash2,
      description:
        "The Licensee shall dispose of rubbish daily in the provided bins.",
    },
    {
      number: 15,
      title: "Alteration and Decoration",
      icon: Home,
      description:
        "The Licensee shall not make alterations to the building, fixtures, fittings, or furniture provided by ProVision Support Service. Personal furniture is not allowed, and small items require written consent.",
    },
    {
      number: 16,
      title: "Reporting Disrepair",
      icon: AlertCircle,
      description:
        "The Licensee shall report any disrepair or defect for which ProVision Support Service is responsible.",
    },
    {
      number: 17,
      title: "Car Parking",
      icon: Car,
      description:
        "The Licensee shall not park any vehicle without a valid tax disc, MOT certificate, and at least 3rd party insurance. Parking on ProVision Support Service's adjacent land is prohibited.",
    },
    {
      number: 18,
      title: "Access",
      icon: Lock,
      description:
        "ProVision Support Service retains spare keys and may access the room for inspections, repairs, or maintenance with reasonable notice.",
    },
    {
      number: 19,
      title: "Lodgers",
      icon: Users,
      description:
        "The Licensee shall not take in lodgers or allow anyone else to live in the accommodation without ProVision Support Service's permission.",
    },
    {
      number: 20,
      title: "Absence from Premises",
      icon: Clock,
      description:
        "The Licensee shall inform ProVision Support Service if absent for seven days or more.",
    },
    {
      number: 21,
      title: "House Rules",
      icon: FileText,
      description: "The Licensee shall comply with the attached house rules.",
    },
    {
      number: 22,
      title: "Ending Your License",
      icon: CheckCircle,
      description:
        "The Licensee shall give ProVision Support Service at least four weeks' notice in writing to end the license.",
    },
    {
      number: 23,
      title: "Moving Out",
      icon: CheckCircle,
      description:
        "The Licensee shall remove personal possessions and leave the accommodation and fixtures in good condition. The Licensee shall return the keys to the accommodation to the ProVision Support Service office by 12 noon on the day the license expires. ProVision Support Service is not responsible for items left behind, and charges may apply for disposal.",
    },
    {
      number: 24,
      title: "Termination by ProVision Support Service",
      icon: CheckCircle,
      description:
        "ProVision Support Service may terminate the license immediately in certain circumstances and recover possession without a court order. Valid notices to the Licensee are considered delivered when left at the room.",
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-br from-[#f9f3ef] via-white to-[#f6e4d5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-[#f9f3ef] rounded-full p-4 border-2 border-[#e4c9b2]">
              <FileText className="w-8 h-8 text-primary-100" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-mogra">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This page outlines the terms and conditions that govern the
            Licensee's occupancy at ProVision Support Services. By agreeing to
            these terms, you acknowledge and agree to adhere to the following
            provisions.
          </p>
        </motion.div>

        {/* Intro Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-8 bg-amber-50 rounded-2xl border-2 border-amber-200"
        >
          <p className="text-gray-700 leading-relaxed text-base font-semibold">
            By occupying accommodation provided by ProVision Support Services,
            you agree to comply with all terms and conditions outlined below.
            Failure to comply may result in termination of your license.
          </p>
        </motion.div>

        {/* Terms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {terms.map((term) => {
            const IconComponent = term.icon;
            return (
              <motion.div
                key={term.number}
                variants={itemVariants}
                className="bg-white rounded-2xl border-2 border-[#edd8c1] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_15px_40px_rgba(147,71,19,0.15)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  {/* Term Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#f9f3ef] shrink-0">
                      <span className="text-primary-100 font-bold text-sm">
                        {term.number}
                      </span>
                    </div>
                    <IconComponent className="w-6 h-6 text-primary-100 shrink-0 mt-0.5" />
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {term.title}
                    </h3>
                  </div>

                  {/* Term Content */}
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {term.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Agreement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 bg-linear-to-r from-primary-100 to-[#7a3f14] rounded-3xl border-2 border-[#b8582c] shadow-[0_20px_40px_rgba(147,71,19,0.3)]"
        >
          <div className="flex items-start gap-4 mb-4">
            <CheckCircle className="w-8 h-8 text-white shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Acknowledgment of Terms
              </h3>
              <p className="text-[#f9f3ef] text-lg mb-6">
                By signing the license agreement with ProVision Support
                Services, you acknowledge that you have read, understood, and
                agree to comply with all terms and conditions outlined above.
                These terms are in place to ensure the safety, security, and
                well-being of all residents and staff.
              </p>
              <button className="px-6 py-3 bg-white text-primary-100 font-semibold rounded-xl hover:bg-[#f9f3ef] transition-all duration-300 shadow-lg hover:shadow-xl">
                Download Terms PDF
              </button>
            </div>
          </div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-blue-50 rounded-2xl border-2 border-blue-200"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">
                Need Clarification?
              </h4>
              <p className="text-gray-700 text-base">
                If you have any questions or need clarification on any of these
                terms and conditions, please don't hesitate to contact our
                support team. We're here to help.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>
            These Terms and Conditions are effective as of January 2024 and were
            last updated on February 18, 2026.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Terms;
