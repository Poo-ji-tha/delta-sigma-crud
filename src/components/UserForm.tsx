import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { TextField, Button, Stack } from "@mui/material";
import type { User } from "../types/user";

interface Props {
  onSubmit: (data: User) => void;
  defaultValues?: User;
  submitting?: boolean;
}

// Zod schema for validation
const userSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email"),
  role: z.string().min(2, "Role is required"),
  phone: z.string().min(1, "Phone is required"),
});

type FormData = z.infer<typeof userSchema>;

export default function UserForm({
  onSubmit,
  defaultValues,
  submitting,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
    defaultValues,
  });

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Stack spacing={3}>
        <TextField
          label="First Name"
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
        <TextField
          label="Last Name"
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Role"
          {...register("role")}
          error={!!errors.role}
          helperText={errors.role?.message}
        />
        <TextField
          label="Phone"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={submitting}
        >
          {submitting ? "Saving..." : "Save"}
        </Button>
      </Stack>
    </form>
  );
}
