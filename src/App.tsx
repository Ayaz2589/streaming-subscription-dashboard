import {
  initialState,
  DashboardContextProvider,
} from "./context/DashboardContext";
import { Main } from "./Components/v1";
import { createTheme, colors, ThemeProvider } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.subvariant-hovered": {
            "& fieldset": {
              border: "none",
            },
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: colors.deepPurple[500],
      light: colors.deepPurple[50],
      dark: colors.deepPurple[900],
    },
    neutral: {
      main: colors.blueGrey[500],
      light: colors.blueGrey[50],
      dark: colors.blueGrey[900],
    },
  },
  typography: {
    fontFamily: ["Lato"].join(","),
  },
  shape: {
    borderRadius: 16,
  },
});

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
