import { useEffect, useState } from "react";
import {
  initialState,
  DashboardContextProvider,
} from "./context/DashboardContext";
import Main from "./Components/Main";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import { BrowserRouter } from "react-router-dom";
import { useSetTheme } from "./hooks";

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
    <Box sx={{ backgroundColor: theme.palette.primary.light }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <DashboardContextProvider data={initialState.data}>
            <Main />
          </DashboardContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default App;
