/**
 * Header Component
 *
 * Displays the application's top navigation bar with the company name
 * and a theme toggle button (light/dark mode).
 *
 * Props:
 *  - toggleTheme (function): Callback to switch between light and dark themes.
 *  - darkMode (boolean): Indicates whether dark mode is currently active.
 *
 * Features:
 *  - Uses Material UI AppBar and Toolbar for layout and styling.
 *  - Typography displays the application/company name.
 *  - IconButton switches between light (Brightness7Icon) and dark (Brightness4Icon) icons based on current theme.
 *  - Tailwind CSS classes handle spacing and flex layout for alignment.
 *
 * Usage Example:
 *  <Header toggleTheme={handleThemeToggle} darkMode={isDarkMode} />
 */

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface Props {
  toggleTheme: () => void;
  darkMode: boolean;
}

export default function Header({ toggleTheme, darkMode }: Props) {
  return (
    <AppBar position="static" className="mb-6">
      <Toolbar className="flex justify-between">
        <Typography variant="h6">Delta Sigma Ventures</Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
