import { z } from "zod";

export const referSomeoneSchema = z.object({
  clientFullName: z.string().nonempty("Full name is required."),
  clientBirthDate: z.string().nonempty("Birth date is required."),
  clientGender: z.string().nonempty("Gender is required."),
  clientEmail: z
    .email("Please enter a valid email address.")
    .nonempty("Client email is required."),
  clientAddLineOne: z.string().optional(),
  clientAddLineTwo: z.string().optional(),
  clientCounty: z.string().optional(),
  clientCity: z.string().optional(),
  clientPostCode: z.string().optional(),
  clientPhone: z.string().optional(),
  fixedAddress: z
    .string()
    .nonempty("Please select if client has fixed address."),
  supportReason: z
    .string()
    .nonempty("Support reason is required.")
    .min(10, "Please provide at least 10 characters."),
  assistance: z.string().optional(),
  clientContactModes: z
    .array(z.string())
    .nonempty("Please select at least one contact method."),
  referralFullName: z.string().nonempty("Your full name is required."),
  referralRole: z.string().optional(),
  agencyOrProvider: z.string().optional(),
  referralPhone: z.string().optional(),
  referralEmail: z
    .email("Please enter a valid email address.")
    .nonempty("Your email is required."),
  discoveryMode: z.string().nonempty("Please select how you heard about us."),
});

export type ReferSomeoneFormData = z.infer<typeof referSomeoneSchema>;
