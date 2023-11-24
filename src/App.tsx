import {
  initialState,
  DashboardContextProvider,
} from "./context/DashboardContext";
import { Main } from "./Components/v1";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";

import { useSetTheme } from "./hooks";

function App() {
  const { theme } = useSetTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.light }}>
      <ThemeProvider theme={theme}>
        <DashboardContextProvider data={initialState.data}>
          <Main />
        </DashboardContextProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
