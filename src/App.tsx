import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
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

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
