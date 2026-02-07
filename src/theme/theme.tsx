/**
 * MUI Theme Configuration
 *
 * Provides a function to create a Material UI theme with light or dark mode.
 * Customizes the primary and secondary colors and sets the default font family.
 *
 * Function:
 *  - getTheme(mode: "light" | "dark"): Returns a Material UI theme object.
 *
 * Features:
 *  - Supports light and dark modes using the `mode` property.
 *  - Primary color: Indigo (#4f46e5)
 *  - Secondary color: Yellow (#facc15)
 *  - Typography: Uses "Roboto, sans-serif" as the default font family.
 *
 * Usage Example:
 *  import { getTheme } from "./theme";
 *  import { ThemeProvider } from "@mui/material/styles";
 *
 *  <ThemeProvider theme={getTheme("dark")}>
 *    <App />
 *  </ThemeProvider>
 */

import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#4f46e5" }, // indigo-600
      secondary: { main: "#facc15" }, // yellow-400
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });
