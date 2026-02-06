import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import { createUser, updateUser, getUsers } from "../services/userApi";
import type { User } from "../types/user";
import { Typography, Container, Paper } from "@mui/material";

export default function AddUserPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [defaultValues, setDefaultValues] = useState<User | undefined>();

  const isEditMode = Boolean(id);

  // Fetch user when editing
  useEffect(() => {
    if (!id) return;

    getUsers()
      .then((res) => {
        console.log("Fetched users:", res.data);
        const user = res.data.find((u) => u.id === id); // string match
        if (user) setDefaultValues(user);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleSubmit = async (data: User) => {
    try {
      if (isEditMode) {
        await updateUser(id!, data);
      } else {
        await createUser(data);
      }
      navigate("/users");
    } catch (err) {
      console.error("Save failed", err);
    }
  };

  return (
    <Container maxWidth="sm" className="my-10">
      <Paper className="p-6 shadow-lg rounded-lg">
        <Typography variant="h5" mb={2}>
          {isEditMode ? "Edit User" : "Add New User"}
        </Typography>

        {/* Show loading while fetching */}
        {isEditMode && !defaultValues ? (
          <Typography>Loading user data...</Typography>
        ) : (
          <UserForm onSubmit={handleSubmit} defaultValues={defaultValues} />
        )}
      </Paper>
    </Container>
  );
}
