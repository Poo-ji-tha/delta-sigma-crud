import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import { createUser, updateUser, getUserById } from "../services/userApi";
import type { User } from "../types/user";
import {
  Typography,
  Container,
  Paper,
  CircularProgress,
  Box,
} from "@mui/material";

export default function AddUserPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [defaultValues, setDefaultValues] = useState<User | undefined>();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isEditMode = Boolean(id);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    getUserById(id)
      .then((res) => setDefaultValues(res.data))
      .catch((err) => console.error("Fetch user failed", err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (data: User) => {
    try {
      setSubmitting(true);
      if (isEditMode) {
        await updateUser(id!, data);
      } else {
        await createUser(data);
      }
      navigate("/users");
    } catch (err) {
      console.error("Save failed", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="sm" className="my-10">
      <Paper className="p-6 sm:p-8 shadow-xl rounded-2xl">
        <Typography
          variant="h4"
          fontWeight={600}
          mb={3}
          textAlign="center"
          color="primary"
        >
          {isEditMode ? "Edit User" : "Add New User"}
        </Typography>

        {loading ? (
          <Box className="flex justify-center py-20">
            <CircularProgress size={50} />
          </Box>
        ) : (
          <UserForm
            onSubmit={handleSubmit}
            defaultValues={defaultValues}
            submitting={submitting}
          />
        )}
      </Paper>
    </Container>
  );
}
