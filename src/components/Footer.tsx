/**
 * Footer Component
 *
 * A simple footer for the application that displays the current year
 * and company name. Supports light and dark mode styling with Tailwind CSS.
 *
 * Usage Example:
 *  <Footer />
 *
 * Notes:
 *  - Uses Material UI Typography for consistent text styling.
 *  - Tailwind classes handle spacing, text alignment, background colors,
 *    text colors, and rounded corners.
 *  - Automatically updates the year using JavaScript's Date object.
 */

import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer className="p-4 mt-10 text-center text-gray-700 bg-indigo-100 rounded-t-lg dark:bg-gray-800 dark:text-gray-200">
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Delta Sigma Ventures. All rights
        reserved.
      </Typography>
    </footer>
  );
}
