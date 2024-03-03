import { z } from "zod";

export const companySchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must contain at least 3 characters" }),
  website: z.union([z.string().url().nullish(), z.literal("")]),
  linkedin: z.union([
    z
      .string()
      .url()
      .refine((url) => url.includes("linkedin.com"), {
        message: "Not a valid LinkedIn URL",
      }),
    z.literal(""),
  ]),
  industry: z.string(),
  employees: z.string(),
  desc: z
    .string()
    .min(20, { message: "Description must contain at least 30 characters" }),
  goals: z.string().optional(),
  headquarters: z.string().optional(),
  funding_round: z.string().min(4, { message: "Select Funding Round" }),
  faqs: z.union([z.string().url().nullish(), z.literal("")]),
});
