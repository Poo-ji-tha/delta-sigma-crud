/**
 * UserListPage Component
 *
 * Displays a list of users in a table with options to add, edit, or delete users.
 *
 * Features:
 *  - Fetches users from the API on component mount using `getUsers`.
 *  - Shows a "No users found" message if the list is empty.
 *  - Add button navigates to the Add User page.
 *  - Edit button navigates to the Edit User page for the selected user.
 *  - Delete button prompts confirmation and deletes the user using `deleteUser`.
 *  - Uses Material UI Table components for layout and styling.
 *  - Tailwind CSS handles spacing, hover effects, and responsive design.
 *
 * Hooks Used:
 *  - `useState` for managing the list of users.
 *  - `useEffect` to fetch the user data on mount.
 *  - `useNavigate` for programmatic navigation.
 *
 * Usage Example:
 *  <UserListPage />
 */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../services/userApi";
import type { User } from "../types/user";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography,
  Container,
  Paper,
  Box,
  IconButton,
  useTheme,
  TableContainer,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

export default function UserListPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const theme = useTheme();

  const fetchUsers = () => {
    getUsers().then((res) => setUsers(res.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id: string) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    deleteUser(id).then(() => fetchUsers());
  };

  return (
    <Container maxWidth="lg" className="my-10">
      <Paper className="p-6 shadow-xl rounded-2xl">
        <Box className="flex flex-col items-center mb-4 sm:flex-row sm:justify-between">
          <Typography variant="h4" fontWeight={600} mb={{ xs: 2, sm: 0 }}>
            Users
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/users/add")}
          >
            Add New User
          </Button>
        </Box>

        <TableContainer>
          <Table>
            <TableHead
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.grey[900]
                    : theme.palette.grey[100],
              }}
            >
              <TableRow>
                {["First Name", "Last Name", "Email", "Phone", "Actions"].map(
                  (header) => (
                    <TableCell
                      key={header}
                      sx={{
                        color:
                          theme.palette.mode === "dark"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                        fontWeight: 600,
                      }}
                    >
                      {header}
                    </TableCell>
                  ),
                )}
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  hover
                  sx={{
                    "&:hover": {
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? theme.palette.grey[800]
                          : theme.palette.grey[50],
                    },
                  }}
                >
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => navigate(`/users/edit/${user.id}`)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(user.id!)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              {users.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} sx={{ textAlign: "center", py: 3 }}>
                    <Typography>No users found</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}
