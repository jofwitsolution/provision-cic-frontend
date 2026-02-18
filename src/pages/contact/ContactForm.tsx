import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Mail, Phone, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { FormInput, FormTextarea } from "@/components/shared/formik";
import API from "@/lib/axios-client";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  const submitForm: SubmitHandler<ContactFormData> = async (data) => {
    try {
      // Mock submission
      // await new Promise((resolve) => setTimeout(resolve, 1500));
      await API.post("/email/contact-us", data);
      reset();
      setSuccessMessage(true);
      toast.success("Your message has been sent successfully!");
      setTimeout(() => setSuccessMessage(false), 8000);
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      if (err?.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

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

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-linear-to-br from-[#f9f3ef] via-white to-[#f6e4d5] py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit(submitForm)}>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-3 font-mogra">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600">
              Have a question or need assistance? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-10 mb-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-2 border-[#edd8c1]"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-8"
              variants={itemVariants}
            >
              <MessageSquare className="w-8 h-8 text-primary-100" />
              <h2 className="text-2xl font-bold text-gray-900">
                Contact Details
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div variants={itemVariants}>
                <FormInput
                  label="Full Name"
                  id="fullName"
                  error={errors.fullName}
                  required
                  placeholder="Enter your full name"
                  icon={User}
                  register={register("fullName")}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormInput
                  label="Email Address"
                  id="email"
                  type="email"
                  error={errors.email}
                  required
                  placeholder="your@email.com"
                  icon={Mail}
                  register={register("email")}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormInput
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  placeholder="e.g. +44 (0)123 456 7890"
                  icon={Phone}
                  register={register("phone")}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormInput
                  label="Subject"
                  id="subject"
                  error={errors.subject}
                  required
                  placeholder="What is this about?"
                  register={register("subject")}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="md:col-span-2">
                <FormTextarea
                  label="Message"
                  id="message"
                  placeholder="Please describe your inquiry in detail..."
                  rows={6}
                  error={errors.message}
                  required
                  register={register("message")}
                />
              </motion.div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-end mt-8"
              variants={itemVariants}
            >
              <button
                type="button"
                onClick={() => reset()}
                className="px-8 py-4 rounded-2xl font-semibold text-primary-100 bg-transparent border-2 border-primary-100 hover:bg-[#f9f3ef] transition-all duration-300"
              >
                Clear
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 min-w-50 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-100 hover:bg-[#7a3f14] shadow-[0_12px_24px_rgba(147,71,19,0.3)] hover:shadow-[0_16px_32px_rgba(147,71,19,0.4)]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-3 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>

          {/* Success Message */}
          <AnimatePresence>
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-800">Success!</p>
                  <p className="text-emerald-700 text-sm">
                    Your message has been sent successfully. We will get back to
                    you shortly!
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Info Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-5 rounded-2xl bg-blue-50 border-2 border-blue-200 text-blue-900 text-sm flex items-start gap-3"
          >
            <div className="shrink-0 mt-0.5">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p>
              We typically respond to inquiries within 24-48 hours during
              business days. Thank you for reaching out!
            </p>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
