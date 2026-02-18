import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, type LucideIcon } from "lucide-react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import type {
  ReactNode,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
} from "react";

interface FormInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id"
> {
  label: string;
  id: string;
  error?: FieldError;
  required?: boolean;
  icon?: LucideIcon;
  register?: UseFormRegisterReturn;
}

export const FormInput = ({
  label,
  id,
  type = "text",
  error,
  required = false,
  icon: Icon,
  register,
  ...props
}: FormInputProps) => (
  <div className="mb-5">
    <label
      htmlFor={id}
      className="block text-sm font-semibold text-gray-800 mb-2"
    >
      {label}
      {required && <span className="text-primary-100 ml-1">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-100 opacity-60 pointer-events-none" />
      )}
      <input
        type={type}
        id={id}
        className={`w-full px-4 py-3 ${Icon ? "pl-12" : "pl-4"} rounded-2xl border-2 transition-all duration-300 bg-white focus:outline-none font-medium text-gray-700 placeholder:text-gray-400 ${
          error
            ? "border-red-300 focus:border-red-500 bg-red-50/30"
            : "border-[#e4c9b2] focus:border-primary-100 hover:border-[#d4b8a0]"
        }`}
        {...register}
        {...props}
      />
    </div>
    <AnimatePresence>
      {error?.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex items-center gap-1.5 mt-2 text-red-600 text-xs font-medium"
        >
          <AlertCircle className="w-4 h-4" />
          {error.message}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

interface FormSelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "id"
> {
  label: string;
  id: string;
  error?: FieldError;
  required?: boolean;
  children: ReactNode;
  register?: UseFormRegisterReturn;
}

export const FormSelect = ({
  label,
  id,
  error,
  required = false,
  children,
  register,
  ...props
}: FormSelectProps) => (
  <div className="mb-5">
    <label
      htmlFor={id}
      className="block text-sm font-semibold text-gray-800 mb-2"
    >
      {label}
      {required && <span className="text-primary-100 ml-1">*</span>}
    </label>
    <select
      id={id}
      className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 bg-white focus:outline-none font-medium text-gray-700 cursor-pointer ${
        error
          ? "border-red-300 focus:border-red-500 bg-red-50/30"
          : "border-[#e4c9b2] focus:border-primary-100 hover:border-[#d4b8a0]"
      }`}
      {...register}
      {...props}
    >
      {children}
    </select>
    <AnimatePresence>
      {error?.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex items-center gap-1.5 mt-2 text-red-600 text-xs font-medium"
        >
          <AlertCircle className="w-4 h-4" />
          {error.message}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

interface FormTextareaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id"
> {
  label: string;
  id: string;
  error?: FieldError;
  required?: boolean;
  register?: UseFormRegisterReturn;
}

export const FormTextarea = ({
  label,
  id,
  error,
  required = false,
  register,
  ...props
}: FormTextareaProps) => (
  <div className="mb-5">
    <label
      htmlFor={id}
      className="block text-sm font-semibold text-gray-800 mb-2"
    >
      {label}
      {required && <span className="text-primary-100 ml-1">*</span>}
    </label>
    <textarea
      id={id}
      className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 bg-white focus:outline-none font-medium text-gray-700 placeholder:text-gray-400 resize-none ${
        error
          ? "border-red-300 focus:border-red-500 bg-red-50/30"
          : "border-[#e4c9b2] focus:border-primary-100 hover:border-[#d4b8a0]"
      }`}
      {...register}
      {...props}
    />
    <AnimatePresence>
      {error?.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex items-center gap-1.5 mt-2 text-red-600 text-xs font-medium"
        >
          <AlertCircle className="w-4 h-4" />
          {error.message}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  options: RadioOption[];
  error?: FieldError;
  required?: boolean;
  register: UseFormRegisterReturn;
}

export const RadioGroup = ({
  label,
  options,
  error,
  required = false,
  register,
}: RadioGroupProps) => (
  <div className="mb-5">
    <label className="block text-sm font-semibold text-gray-800 mb-3">
      {label}
      {required && <span className="text-primary-100 ml-1">*</span>}
    </label>
    <div className="space-y-2.5">
      {options.map((option) => (
        <motion.label
          key={option.value}
          className="flex items-center cursor-pointer p-3 rounded-xl border-2 border-[#e4c9b2] hover:border-primary-100 hover:bg-[#f9f3ef] transition-all duration-200"
          whileHover={{ scale: 1.01 }}
        >
          <input
            type="radio"
            value={option.value}
            className="w-5 h-5 accent-primary-100 cursor-pointer"
            {...register}
          />

          <span className="ml-3 font-medium text-gray-700">{option.label}</span>
        </motion.label>
      ))}
    </div>
    <AnimatePresence>
      {error?.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex items-center gap-1.5 mt-2 text-red-600 text-xs font-medium"
        >
          <AlertCircle className="w-4 h-4" />
          {error.message}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

interface CheckboxGroupProps {
  label: string;
  options: string[];
  error?: FieldError;
  required?: boolean;
  register: UseFormRegisterReturn;
}

export const CheckboxGroup = ({
  label,
  options,
  error,
  required = false,
  register,
}: CheckboxGroupProps) => (
  <div className="mb-5">
    <label className="block text-sm font-semibold text-gray-800 mb-3">
      {label}
      {required && <span className="text-primary-100 ml-1">*</span>}
    </label>
    <div className="space-y-2.5">
      {options.map((option) => (
        <motion.label
          key={option}
          className="flex items-center cursor-pointer p-3 rounded-xl border-2 border-[#e4c9b2] hover:border-primary-100 hover:bg-[#f9f3ef] transition-all duration-200"
          whileHover={{ scale: 1.01 }}
        >
          <input
            type="checkbox"
            value={option}
            className="w-5 h-5 accent-primary-100 cursor-pointer rounded"
            {...register}
          />

          <span className="ml-3 font-medium text-gray-700">{option}</span>
        </motion.label>
      ))}
    </div>
    <AnimatePresence>
      {error?.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex items-center gap-1.5 mt-2 text-red-600 text-xs font-medium"
        >
          <AlertCircle className="w-4 h-4" />
          {error.message}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
