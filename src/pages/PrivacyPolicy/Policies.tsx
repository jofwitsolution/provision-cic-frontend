import { motion, type Variants } from "framer-motion";
import {
  Shield,
  CheckCircle,
  Lock,
  FileText,
  AlertCircle,
  Share2,
} from "lucide-react";

const Policies = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const sections = [
    {
      title: "Data Collection and Storage",
      icon: Lock,
      content:
        "To provide you with support, we record details of your support. These details may include your personal and special category data, as defined by GDPR.",
    },
    {
      title: "Data Usage and Sharing",
      icon: Share2,
      subsections: [
        {
          label: "Permission to Store Your Data",
          text: "By signing our consent form, you provide your consent for us to process your data, including personal and special category data. Your support details will be securely stored in a shared electronic case management system accessed by ProVision Support Service members. Paper copies of your data may also be stored securely.",
        },
        {
          label: "Permission to Share Your Data with Other Organizations",
          text: "While we treat all information you share with us confidentially, there may be instances where we suggest that you seek advice from other organizations better equipped to address your needs. With your consent, we may:",
          bullets: [
            "Refer you to other third-party services.",
            "Make appointments with other third-party services on your behalf.",
            "Share your personal information with other third-party services so they have initial information about you.",
          ],
        },
      ],
    },
    {
      title: "Personal and Special Category Data",
      icon: FileText,
      content:
        "Personal data includes information that can be used to identify you, such as your name, date of birth, address, telephone number, etc. Special category data includes information related to racial or ethnic origin, religious beliefs, health, sexuality or sex life, offences and/or convictions.",
    },
    {
      title: "Data Storage",
      icon: Lock,
      content:
        "Your support details will be stored in a shared electronic case management system accessed by ProVision Support Service members and their contractual partners. Your information may also be securely stored in paper files held by ProVision Support Service or its contractual partners.",
    },
    {
      title: "Data Controller and Data Processor",
      icon: Shield,
      bullets: [
        "A Data Controller is responsible for ensuring that your data is processed according to the law, including accuracy and security. Typically, the Data Controller is the funder of the service you receive.",
        "ProVision Support Service, for GDPR purposes, acts as the Data Processor on behalf of the Commissioner of the service.",
      ],
    },
    {
      title: "Consent Withdrawal",
      icon: AlertCircle,
      content:
        "You have the right to withhold or withdraw your consent. However, this may affect our ability to provide you with support. We will work with your Data Controller to find alternative solutions that align with our contractual obligations.",
    },
    {
      title: "Data Sharing",
      icon: CheckCircle,
      content:
        "We will not share your information with any third party without your explicit consent, except where required by law. Both ProVision Support Service and our contractual partners have individual complaints policies, and you may request further details.",
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
              <Shield className="w-8 h-8 text-primary-100" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-mogra">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At ProVision Support Service, we are committed to ensuring the
            privacy and security of your personal data. We comply with the
            General Data Protection Regulation (GDPR) and are transparent about
            how we collect, use, and protect your information.
          </p>
        </motion.div>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-8 bg-blue-50 rounded-2xl border-2 border-blue-200"
        >
          <p className="text-gray-700 leading-relaxed text-base">
            By engaging with our services, you consent to our data processing
            practices as outlined in this privacy policy. We are dedicated to
            protecting your information and ensuring compliance with all
            applicable data protection regulations.
          </p>
        </motion.div>

        {/* Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6"
        >
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl border-2 border-[#edd8c1] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_15px_40px_rgba(147,71,19,0.15)] transition-all duration-300"
              >
                <div className="p-6 md:p-8">
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="shrink-0">
                      <IconComponent className="w-6 h-6 text-primary-100" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>

                  {/* Content */}
                  {section.content && (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {section.content}
                    </p>
                  )}

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-6 mb-4">
                      {section.subsections.map((subsection, subIndex) => (
                        <div
                          key={subIndex}
                          className="bg-[#f9f3ef] p-6 rounded-xl"
                        >
                          <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                            {subsection.label}
                          </h4>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            {subsection.text}
                          </p>
                          {subsection.bullets && (
                            <ul className="space-y-2 ml-4">
                              {subsection.bullets.map((bullet, bulletIndex) => (
                                <li
                                  key={bulletIndex}
                                  className="flex items-start gap-3 text-gray-700"
                                >
                                  <span className="text-primary-100 font-bold mt-1 shrink-0">
                                    •
                                  </span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullets */}
                  {section.bullets && !section.subsections && (
                    <ul className="space-y-3 ml-4">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="text-primary-100 font-bold mt-1 shrink-0">
                            •
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-8 md:p-10 bg-linear-to-r from-primary-100 to-[#7a3f14] rounded-3xl border-2 border-[#b8582c] shadow-[0_20px_40px_rgba(147,71,19,0.3)]"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Questions About Your Data?
          </h3>
          <p className="text-[#f9f3ef] text-lg mb-5">
            For more information about how we process your data or to exercise
            your data rights, please contact our privacy team.
          </p>
          <button className="px-6 py-3 bg-white text-primary-100 font-semibold rounded-xl hover:bg-[#f9f3ef] transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Privacy Team
          </button>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>
            This Privacy Policy is effective as of January 2024 and was last
            updated on February 18, 2026.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Policies;
