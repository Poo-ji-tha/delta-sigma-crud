import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Stack } from "@mui/material";
import { userSchema } from "../validation/userSchema";
import { userFormConfig } from "../config/userFormConfig";
import type { User } from "../types/user";

interface Props {
  onSubmit: (data: User) => void;
  defaultValues?: User;
}

export default function UserForm({ onSubmit, defaultValues }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        {userFormConfig.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            type={field.type}
            {...register(field.name as keyof User)}
            error={!!errors[field.name as keyof User]}
            helperText={errors[field.name as keyof User]?.message as string}
            fullWidth
          />
        ))}
        <Button variant="contained" type="submit" size="large">
          Save
        </Button>
      </Stack>
    </form>
  );
}
