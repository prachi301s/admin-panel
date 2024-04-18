import { z } from "zod";

export const ForgotSchema = z.object({
  email: z
    .string()
    .email("please_enter_a_valid_email")
    .min(6, "email_must_be_between_6_and_254_characters_long")
    .max(254, "email_must_be_between_6_and_254_characters_long")
    .refine((value) => value !== undefined, {
      message: "email_is_required",
    }),
});
