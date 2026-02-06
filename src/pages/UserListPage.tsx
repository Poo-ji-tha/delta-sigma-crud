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
} from "@mui/material";

export default function UserListPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

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
    <Container maxWidth="md" className="my-10">
      <Paper className="p-6 shadow-lg rounded-lg">
        <Typography variant="h5" mb={2}>
          User List
        </Typography>
        <Button
          variant="contained"
          className="mb-4"
          onClick={() => navigate("/users/add")}
        >
          Add New User
        </Button>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    className="mr-2"
                    onClick={() => navigate(`/users/edit/${user.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(user.id!)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {users.length === 0 && (
              <TableRow>
                <TableCell colSpan={5}>
                  <Typography>No users found</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
