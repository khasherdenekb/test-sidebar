import * as z from "zod";

export const userFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18 years old"),
  bio: z.string().min(10, "Bio must be at least 10 characters").max(160, "Bio must not exceed 160 characters"),
});