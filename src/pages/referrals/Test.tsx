import type { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Test = () => {
  return (
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
              className="w-full px-4 py-3 rounded-2xl border-2 border-[#e4c9b2] focus:border-[#934713] focus:outline-none font-medium text-gray-700"
              {...register("clientAddLineOne")}
            />
          </div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Address Line 2
            </label>
            <input
              type="text"
              placeholder="Apartment, suite, etc (optional)"
              className="w-full px-4 py-3 rounded-2xl border-2 border-[#e4c9b2] focus:border-[#934713] focus:outline-none font-medium text-gray-700"
              {...register("clientAddLineTwo")}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                City
              </label>
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-3 rounded-2xl border-2 border-[#e4c9b2] focus:border-[#934713] focus:outline-none font-medium text-gray-700"
                {...register("clientCity")}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                County/Region
              </label>
              <input
                type="text"
                placeholder="County"
                className="w-full px-4 py-3 rounded-2xl border-2 border-[#e4c9b2] focus:border-[#934713] focus:outline-none font-medium text-gray-700"
                {...register("clientCounty")}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Postcode
              </label>
              <input
                type="text"
                placeholder="Postcode"
                className="w-full px-4 py-3 rounded-2xl border-2 border-[#e4c9b2] focus:border-[#934713] focus:outline-none font-medium text-gray-700"
                {...register("clientPostCode")}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Test;
