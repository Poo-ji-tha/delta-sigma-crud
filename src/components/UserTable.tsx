import { useState } from "react";
import type { User } from "../types/user";
import DeleteConfirmDialog from "./DeleteDialog";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  users: User[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export default function UserTable({ users, onDelete, onEdit }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      <table className="w-full border rounded-lg overflow-hidden">
        <thead className="bg-indigo-100">
          <tr>
            <th className="p-3">Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t hover:bg-gray-50 transition">
              <td className="p-3">
                {u.firstName} {u.lastName}
              </td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td className="text-center">
                <Tooltip title="Edit">
                  <IconButton color="primary" onClick={() => onEdit(u.id!)}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton
                    color="error"
                    onClick={() => setSelectedId(u.id!)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
