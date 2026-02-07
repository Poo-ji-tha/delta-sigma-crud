import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Stack } from "@mui/material";
import type { User } from "../types/user";

import userSchema, { type UserFormData } from "../validation/userSchema";

interface Props {
  onSubmit: (data: User) => void;
  defaultValues?: User;
  submitting?: boolean;
}

export default function UserForm({
  onSubmit,
  defaultValues,
  submitting = false,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues,
  });

  const handleFormSubmit = (data: UserFormData) => {
    // normalize phone (+91 → 10 digits)
    const normalizedPhone = data.phone.startsWith("+91")
      ? data.phone.slice(3)
      : data.phone;

    onSubmit({
      ...data,
      phone: normalizedPhone,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
      <Stack spacing={3}>
        <TextField
          label="First Name"
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          fullWidth
        />

        <TextField
          label="Last Name"
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          fullWidth
        />

        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
        />

        <TextField
          label="Role"
          {...register("role")}
          error={!!errors.role}
          helperText={errors.role?.message}
          fullWidth
        />

        <TextField
          label="Phone"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          inputProps={{ maxLength: 13 }}
          fullWidth
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
