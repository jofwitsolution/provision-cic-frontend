import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().nonempty("Full name is required."),
  email: z
    .email("Please enter a valid email address.")
    .nonempty("Email is required."),
  phone: z.string().optional(),
  subject: z
    .string()
    .nonempty("Subject is required.")
    .min(5, "Subject must be at least 5 characters."),
  message: z
    .string()
    .nonempty("Message is required.")
    .min(10, "Please provide at least 10 characters."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
