import { createTheme, responsiveFontSizes, Shadows } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    tableStatusCellPending: Palette["primary"];
    tableStatusCellInProgress: Palette["primary"];
    tableStatusCellComplete: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    tableStatusCellPending?: PaletteOptions["primary"];
    tableStatusCellInProgress?: PaletteOptions["primary"];
    tableStatusCellComplete?: PaletteOptions["primary"];
  }
}

let monotone = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 2150,
      xl: 2500,
    },
  },
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
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    primary: {
      main: "#607d8b",
      light: "#cfd8dc",
      dark: "#263238",
    },
    secondary: {
      main: "#ffeb3b",
      light: "#fffde7",
      dark: "#f57f17",
    },
    neutral: {
      main: "#607d8b",
      light: "#b0bec5",
      dark: "#263238",
    },
    tableStatusCellInProgress: {
      main: "#ffca28",
    },
    tableStatusCellPending: {
      main: "#b0bec5",
    },
    tableStatusCellComplete: {
      main: "#a5d6a7",
    },
  },
  typography: {
    fontFamily: ["Lato"].join(","),
  },
  shape: {
    borderRadius: 8,
  },
  shadows: ["none", ...Array(24).fill("none")] as Shadows,
});

monotone = responsiveFontSizes(monotone);

export default monotone;
