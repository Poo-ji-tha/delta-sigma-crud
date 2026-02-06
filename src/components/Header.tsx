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
