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

import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Invalid phone number"),
});
