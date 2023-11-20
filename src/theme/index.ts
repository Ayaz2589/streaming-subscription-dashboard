import { createTheme, colors, responsiveFontSizes } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

let theme = createTheme({
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
      main: colors.deepPurple[500],
      light: colors.deepPurple[50],
      dark: colors.deepPurple[900],
    },
    neutral: {
      main: colors.blueGrey[500],
      light: colors.blueGrey[200],
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

theme = responsiveFontSizes(theme);

export default theme;
