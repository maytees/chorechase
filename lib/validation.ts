import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(2, {
    message: "Please enter a valid username.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});
