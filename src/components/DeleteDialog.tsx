/**
 * DeleteConfirmDialog Component
 *
 * A reusable confirmation dialog for deleting a user or any item.
 * Displays a modal with a title, explanatory text, and two action buttons:
 * "Cancel" to close the dialog and "Delete" to confirm the deletion.
 *
 * Props:
 *  - open (boolean): Controls whether the dialog is visible.
 *  - onClose (function): Callback fired when the dialog is closed or cancelled.
 *  - onConfirm (function): Callback fired when the delete action is confirmed.
 *
 * Usage Example:
 *  <DeleteConfirmDialog
 *    open={isDialogOpen}
 *    onClose={handleClose}
 *    onConfirm={handleDelete}
 *  />
 *
 * Note:
 *  - The "Delete" button is styled with MUI's error color to indicate a destructive action.
 *  - This component uses Material UI's Dialog components.
 */

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material"; // Importing Material UI components for building the dialog

// Define the props interface for type safety
interface Props {
  open: boolean; // Controls whether the dialog is visible
  onClose: () => void; // Function called when the dialog is closed or cancelled
  onConfirm: () => void; // Function called when the delete action is confirmed
}

// DeleteConfirmDialog component
export default function DeleteConfirmDialog({
  open,
  onClose,
  onConfirm,
}: Props) {
  return (
    // Dialog component from MUI, controlled via the `open` prop
    <Dialog open={open} onClose={onClose}>
      {/* Dialog header */}
      <DialogTitle>Confirm Delete</DialogTitle>

      {/* Dialog content area with explanatory text */}
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this user?
        </DialogContentText>
      </DialogContent>

      {/* Dialog action buttons */}
      <DialogActions>
        {/* Cancel button closes the dialog */}
        <Button onClick={onClose}>Cancel</Button>

        {/* Delete button triggers the confirm callback, styled as error */}
        <Button color="error" onClick={onConfirm}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
