import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../services/userApi";
import type { User } from "../types/user";

import { Button, Typography, Container, Paper, Box } from "@mui/material";

import UserTable from "../components/UserTable";

export default function UserListPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h4" fontWeight={600}>
            Users
          </Typography>

          <Button variant="contained" onClick={() => navigate("/users/add")}>
            Add New User
          </Button>
        </Box>

        <UserTable
          users={users}
          onEdit={(id) => navigate(`/users/edit/${id}`)}
          onDelete={async (id) => {
            await deleteUser(id);
            fetchUsers();
          }}
        />
      </Paper>
    </Container>
  );
}
