import {
  initialState,
  DashboardContextProvider,
} from "./context/DashboardContext";
import { Main } from "./Components/v1";
import { ThemeProvider } from "@mui/material";
// import { highSchoolMascot as theme } from "./theme";
import { monotone as theme } from "./theme";

import Box from "@mui/material/Box";

function App() {
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
