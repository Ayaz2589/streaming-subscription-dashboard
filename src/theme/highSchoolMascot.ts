import { createTheme, responsiveFontSizes, Shadows } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

let highSchoolMascot = createTheme({
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
      main: "#673ab7",
      light: "#ede7f6",
      dark: "#311b92",
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
  },
  typography: {
    fontFamily: ["Lato"].join(","),
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    "none",
    "0px 1px 10px -5px rgba(0,0,0,0.75)",
    ...Array(23).fill("none"),
  ] as Shadows,
});

highSchoolMascot = responsiveFontSizes(highSchoolMascot);

export default highSchoolMascot;
