import { useEffect, useState } from "react";
import {
  initialState,
  DashboardContextProvider,
} from "./context/DashboardContext";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import {
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
        <DashboardContextProvider data={initialState.data}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </DashboardContextProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
