import {
  initialState,
  DashboardContextProvider,
} from "./context/DashboardContext";
import { Main } from "./Components/v1";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ margin: 0 }}>
        <DashboardContextProvider data={initialState.data}>
          <Main />
        </DashboardContextProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
