import { useState } from "react";
import type { User } from "../types/user";
import DeleteConfirmDialog from "./DeleteDialog";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  users: User[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => Promise<void> | void;
};

export default function UserTable({ users, onEdit, onDelete }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>
                  {user.firstName} {user.lastName}
                </TableCell>
                <TableCell>{user.email}</TableCell>

                <TableCell align="right">
                  <IconButton color="primary" onClick={() => onEdit(user.id!)}>
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => setSelectedId(user.id!)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {users.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ✅ DELETE CONFIRMATION DIALOG */}
      <DeleteConfirmDialog
        open={!!selectedId}
        onClose={() => setSelectedId(null)}
        onConfirm={async () => {
          if (!selectedId) return;
          await onDelete(selectedId);
          setSelectedId(null);
        }}
      />
    </>
  );
}
