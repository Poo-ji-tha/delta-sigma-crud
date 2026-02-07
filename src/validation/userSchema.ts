/**
 * userSchema (Zod)
 *
 * Defines the validation schema for User objects using Zod.
 * Ensures form inputs are validated before submission.
 *
 * Fields:
 *  - firstName: Required string, minimum length 1.
 *  - lastName: Required string, minimum length 1.
 *  - email: Required string, must be a valid email format.
 *  - phone: Required string, minimum length 5 (basic phone validation).
 *
 * Usage Example (with react-hook-form):
 *  import { useForm } from "react-hook-form";
 *  import { zodResolver } from "@hookform/resolvers/zod";
 *  import { userSchema } from "./userSchema";
 *
 *  const { register, handleSubmit, formState: { errors } } = useForm({
 *    resolver: zodResolver(userSchema)
 *  });
 *
 *  // errors will contain validation messages if input is invalid
 */

// validation/userSchema.ts
// validation/userSchema.ts
import { z } from "zod";

const phoneRegex = /^(?:\+91)?[6-9]\d{9}$/;

const userSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email"),
  role: z.string().min(2, "Role is required"),
  phone: z.string().regex(phoneRegex, {
    message: "Enter 10-digit number or +91 followed by 10 digits",
  }),
});

export type UserFormData = z.infer<typeof userSchema>;
export default userSchema;
