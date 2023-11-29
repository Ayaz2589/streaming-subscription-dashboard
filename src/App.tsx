import { useEffect, useState } from "react";
import {
  initialState,
  DashboardContextProvider,
} from "./context/DashboardContext";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import {
  Authentication,
  Navigation,
  Dashboard,
  Project,
  Router,
} from "./Components/v2";
import { useSetTheme } from "./hooks";

export enum SectionRoutes {
  Dashboard = "/",
  Project = "/project",
  Client = "/client",
  Finance = "/finance",
}

function App() {
  const { theme, setHighSchoolMascot, setMonotone } = useSetTheme();
  const [themeState] = useState("monotone");
  const [currentSection, updateCurrentSection] = useState("");

  console.log(currentSection);

  useEffect(() => {
    if (themeState === "monotone") {
      setMonotone();
      return;
    }

    setHighSchoolMascot();
  }, [themeState]);

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.light }}>
      <ThemeProvider theme={theme}>
        <DashboardContextProvider data={initialState.data}>
          <BrowserRouter>
            <Router updateCurrentSection={updateCurrentSection} />
          </BrowserRouter>
        </DashboardContextProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
