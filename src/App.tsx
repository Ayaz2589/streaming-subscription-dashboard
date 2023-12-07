import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import { AnimatePresence } from "framer-motion";
import { Router } from "./Components";
import { useSetTheme } from "./hooks";
import { AuthProvider } from "./context";

export enum SectionRoutes {
  Dashboard = "/",
  Project = "/project",
  Client = "/client",
  Finance = "/finance",
}

function App() {
  const { theme, setHighSchoolMascot, setMonotone } = useSetTheme();
  const [themeState] = useState("monotone");

  useEffect(() => {
    if (themeState === "monotone") {
      setMonotone();
      return;
    }

    setHighSchoolMascot();
  }, [themeState]);

  const currentPath = window.location.pathname;

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          <AuthProvider>
            <BrowserRouter>
              <Router key={currentPath} />
            </BrowserRouter>
          </AuthProvider>
        </AnimatePresence>
      </ThemeProvider>
    </Box>
  );
}

export default App;
