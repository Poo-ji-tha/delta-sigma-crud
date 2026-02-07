/**
 * UserTable Component
 *
 * Displays a table of users with their basic information (name, email, phone)
 * and provides actions to edit or delete each user.
 *
 * Features:
 *  - Fully compatible with MUI light/dark theme.
 *  - Highlights rows on hover for better UX.
 *  - Edit/Delete buttons with tooltips.
 *  - Delete confirmation dialog before deletion.
 *
 * Props:
 *  - users (User[]): Array of user objects to display in the table.
 *  - onDelete (function): Callback fired with the user's ID when a user is deleted.
 *  - onEdit (function): Callback fired with the user's ID when editing a user.
 *
 * Usage Example:
 *  <UserTable
 *    users={userList}
 *    onDelete={handleDeleteUser}
 *    onEdit={handleEditUser}
 *  />
 */

import { useState } from "react";
import type { User } from "../types/user";
import DeleteConfirmDialog from "./DeleteDialog";
import {
  IconButton,
  Tooltip,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  users: User[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export default function UserTable({ users, onDelete, onEdit }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const theme = useTheme(); // Access MUI theme for dark/light mode

  return (
    <>
      <TableContainer component={Paper}>
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
              <TableCell
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                  fontWeight: 600,
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                  fontWeight: 600,
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                  fontWeight: 600,
                }}
              >
                Phone
              </TableCell>
              <TableCell
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Actions
              </TableCell>
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
                <TableCell>
                  {user.firstName} {user.lastName}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Tooltip title="Edit">
                    <IconButton
                      color="primary"
                      onClick={() => onEdit(user.id!)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      color="error"
                      onClick={() => setSelectedId(user.id!)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
            {users.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} sx={{ textAlign: "center", py: 3 }}>
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <DeleteConfirmDialog
        open={!!selectedId}
        onClose={() => setSelectedId(null)}
        onConfirm={() => {
          if (selectedId) onDelete(selectedId);
          setSelectedId(null);
        }}
      />
    </>
  );
}
