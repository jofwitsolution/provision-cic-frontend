import { discoveryModes } from "@/lib/data";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Phone, Mail, User } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  referSomeoneSchema,
  type ReferSomeoneFormData,
} from "@/lib/validations/referral";
import {
  CheckboxGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  RadioGroup,
} from "@/components/shared/forms";

const ReferralsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ReferSomeoneFormData>({
    resolver: zodResolver(referSomeoneSchema),
    mode: "onBlur",
  });

  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const [fixedAddress, setFixedAddress] = useState<string | undefined>();

  useEffect(() => {
    const subscription = watch((value) => {
      setFixedAddress(value.fixedAddress);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const submitForm: SubmitHandler<ReferSomeoneFormData> = async (data) => {
    console.log("Form Data:", data);
    try {
      // await sendReferralData(data);
      // Mock submission for now
      await new Promise((resolve) => setTimeout(resolve, 1500));
      reset();
      setSuccessMessage(true);
      toast.success("Your referral has been submitted successfully!");
      setTimeout(() => setSuccessMessage(false), 5000);
    } catch (error) {
      const err = error as { response?: { data?: { msg?: string } } };
      if (err?.response?.data?.msg) {
        toast.error(err.response.data.msg);
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
                  Your referral has been submitted successfully.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit(submitForm)}>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-3 font-mogra">
              Refer Someone
            </h1>
            <p className="text-lg text-gray-600">
              Complete this form to refer someone to ProVision's support
              services.
            </p>
            <p className="text-lg text-gray-600">
              The form is safe and secure. The information you provide is
              confidential and protected by encryption. We will only share
              information with professionals outside of ProVision Support
              Services if we think someone is at risk of harm.
            </p>
            <p className="text-lg text-gray-600">
              We will store this referral for a short time within the secure
              Formstack database. We will then keep it in our own storage. Only
              people who need to see the referral information will have access.
            </p>
            <p className="text-lg text-gray-600">
              Please make sure you complete any questions marked with an
              asterisk (*) as we need these details to complete the next steps
              of your referral. You must have consent from your client to give
              their details.
            </p>
          </motion.div>

          {/* Section 1: Client Details */}
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
              <User className="w-8 h-8 text-primary-100" />
              <h2 className="text-2xl font-bold text-gray-900">
                Client's Details
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <FormInput
                label="Full Name"
                id="clientFullName"
                error={errors.clientFullName}
                required
                placeholder="Enter full name"
                register={register("clientFullName")}
              />

              <FormInput
                label="Date of Birth"
                id="clientBirthDate"
                type="date"
                error={errors.clientBirthDate}
                required
                register={register("clientBirthDate")}
              />

              <RadioGroup
                label="Sex at Birth"
                error={errors.clientGender}
                required
                register={register("clientGender")}
                options={[
                  { value: "female", label: "Female" },
                  { value: "male", label: "Male" },
                  { value: "other", label: "Prefer not to say" },
                ]}
              />
            </motion.div>
          </motion.div>

          {/* Section 2: Contact Details */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-10 mb-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-2 border-[#edd8c1]"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={itemVariants}
            >
              <Phone className="w-8 h-8 text-primary-100" />
              <h2 className="text-2xl font-bold text-gray-900">
                Contact Details
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 mb-6 text-sm italic"
            >
              Please answer all questions on behalf of the person you are
              referring.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <RadioGroup
                label="Does your client have a fixed address?"
                register={register("fixedAddress")}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
              />

              <AnimatePresence>
                {fixedAddress === "yes" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5 mb-5 p-5 bg-[#f9f3ef] rounded-2xl border-2 border-[#e4c9b2]"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        placeholder="Street address"
                        className="w-full px-4 py-3 rounded-2xl border-2 border-[#e4c9b2] focus:border-primary-100 focus:outline-none font-medium text-gray-700"
                        {...register("clientAddLineOne")}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        placeholder="Apartment, suite, etc (optional)"
                        className="w-full px-4 py-3 rounded-2xl border-2 border-[#e4c9b2] focus:border-primary-100 focus:outline-none font-medium text-gray-700"
                        {...register("clientAddLineTwo")}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          placeholder="City"
                          className="w-full px-4 py-3 rounded-2xl border-2 border-[#e4c9b2] focus:border-primary-100 focus:outline-none font-medium text-gray-700"
                          {...register("clientCity")}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                          County/Region
                        </label>
                        <input
                          type="text"
                          placeholder="County"
                          className="w-full px-4 py-3 rounded-2xl border-2 border-[#e4c9b2] focus:border-primary-100 focus:outline-none font-medium text-gray-700"
                          {...register("clientCounty")}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                          Postcode
                        </label>
                        <input
                          type="text"
                          placeholder="Postcode"
                          className="w-full px-4 py-3 rounded-2xl border-2 border-[#e4c9b2] focus:border-primary-100 focus:outline-none font-medium text-gray-700"
                          {...register("clientPostCode")}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <FormInput
                label="Phone Number"
                id="clientPhone"
                type="tel"
                placeholder="e.g. +44 (0)123 456 7890"
                icon={Phone}
                register={register("clientPhone")}
              />

              <FormInput
                label="Email Address"
                id="clientEmail"
                type="email"
                error={errors.clientEmail}
                required
                placeholder="name@example.com"
                icon={Mail}
                register={register("clientEmail")}
              />
            </motion.div>
          </motion.div>

          {/* Section 3: Support Needs */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-10 mb-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-2 border-[#edd8c1]"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              className="text-2xl font-bold text-gray-900 mb-8"
              variants={itemVariants}
            >
              Support Needs
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <FormTextarea
                label="Description of Support Needs and Reason for Referral"
                id="supportReason"
                error={errors.supportReason}
                required
                placeholder="Please describe what support the client needs and why you are referring them..."
                rows={5}
                register={register("supportReason")}
              />

              <FormTextarea
                label="Any Assistance Needed"
                id="assistance"
                placeholder="e.g. translation services, accessibility requirements..."
                rows={4}
                register={register("assistance")}
              />

              <CheckboxGroup
                label="How would your client like us to contact them?"
                error={
                  Array.isArray(errors.clientContactModes)
                    ? errors.clientContactModes[0]
                    : errors.clientContactModes
                }
                required
                register={register("clientContactModes")}
                options={["Letter", "Email", "Phone", "Home visit"]}
              />
            </motion.div>
          </motion.div>

          {/* Section 4: Referrer Details */}
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
              <User className="w-8 h-8 text-primary-100" />
              <h2 className="text-2xl font-bold text-gray-900">Your Details</h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <FormInput
                label="Full Name"
                id="referralFullName"
                error={errors.referralFullName}
                required
                placeholder="Enter your full name"
                register={register("referralFullName")}
              />

              <FormInput
                label="Role"
                id="referralRole"
                placeholder="Your job title or role"
                register={register("referralRole")}
              />

              <FormInput
                label="Agency or Provider"
                id="agencyOrProvider"
                placeholder="Your organisation"
                register={register("agencyOrProvider")}
              />

              <FormInput
                label="Phone Number"
                id="referralPhone"
                type="tel"
                placeholder="e.g. +44 (0)123 456 7890"
                icon={Phone}
                register={register("referralPhone")}
              />

              <FormInput
                label="Email Address"
                id="referralEmail"
                type="email"
                error={errors.referralEmail}
                required
                placeholder="name@example.com"
                icon={Mail}
                register={register("referralEmail")}
              />

              <FormSelect
                label="How did you hear about our service?"
                id="discoveryMode"
                error={errors.discoveryMode}
                required
                register={register("discoveryMode")}
              >
                {discoveryModes.map((item) => (
                  <option key={item.label} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </FormSelect>
            </motion.div>
          </motion.div>

          {/* Submit Button Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 min-w-50 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary-100 hover:bg-[#7a3f14] shadow-[0_12px_24px_rgba(147,71,19,0.3)]"
              }`}
              whileHover={
                !isSubmitting
                  ? { y: -2, boxShadow: "0 16px 32px rgba(147,71,19,0.4)" }
                  : {}
              }
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
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
                  >
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  </motion.div>
                  Submitting...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Submit Referral
                </>
              )}
            </motion.button>

            <motion.button
              type="reset"
              className="px-8 py-4 rounded-2xl font-semibold text-primary-100 bg-transparent border-2 border-primary-100 hover:bg-[#f9f3ef] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                reset();
              }}
            >
              Clear Form
            </motion.button>
          </motion.div>

          {/* Info Banner */}
          <motion.div
            className="p-6 rounded-2xl bg-[#f9f3ef] border-2 border-[#e4c9b2]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-primary-100">Thank you</span>{" "}
              for completing this referral form. We will review the information
              and contact the client within 5 working days.
            </p>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
};

export default ReferralsForm;
