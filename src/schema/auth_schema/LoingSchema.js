import * as z from "zod";

const isValidEmail = (email_id) => {
  return email_id.includes("@") && email_id.includes(".");
};

export const schema = z.object({
  password: z.string().min(1, { message: "Required" }),

  email_id: z.string().refine((email_id) => isValidEmail(email_id), {
    message: "Invalid email format",
  }),

  user_type: z.enum([1, 2, 3]).or(z.number()),
});

