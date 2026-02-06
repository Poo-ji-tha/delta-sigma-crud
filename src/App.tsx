import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { getTheme } from "./theme/theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import AddUserPage from "./pages/AddUserPage";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(
    () => getTheme(darkMode ? "dark" : "light"),
    [darkMode],
  );

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header toggleTheme={toggleTheme} darkMode={darkMode} />
        <Container maxWidth="lg" className="min-h-[80vh]">
          <Routes>
            <Route path="/users" element={<UserListPage />} />
            <Route path="/users/add" element={<AddUserPage />} />
            <Route path="/users/edit/:id" element={<AddUserPage />} />
            <Route path="*" element={<UserListPage />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
