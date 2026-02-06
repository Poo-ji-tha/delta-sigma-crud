import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer className="mt-10 p-4 text-center bg-indigo-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-t-lg">
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Delta Sigma Ventures. All rights
        reserved.
      </Typography>
    </footer>
  );
}
