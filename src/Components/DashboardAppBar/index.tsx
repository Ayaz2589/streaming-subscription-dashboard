import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDarkMode } from "../../context";
import { SearchToggle } from "..";

const drawerWidth = 240;

const DashboardAppBar = ({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(
    `(min-width:${theme.breakpoints.values.sm}px)`
  );
  const { isDarkMode } = useDarkMode();
  return (
    <div data-testid="dashboard-app-bar">
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: isDarkMode
            ? theme.palette.primary.dark
            : theme.palette.primary.light,
          paddingTop: "2rem",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            color={
              isDarkMode
                ? theme.palette?.neutral?.light || "#b0bec5"
                : theme.palette?.neutral?.main || "#506570"
            }
          >
          </Typography>
          {isDesktop ? (
            <Box datatest-id="button-container">
              {isDarkMode ? <LightModeButton /> : <DarkModeButton />}
              <SearchToggle />
            </Box>
          ) : (
            <MenuRoundedIcon
              sx={{ color: theme.palette.primary.main, cursor: "pointer" }}
              onClick={handleDrawerToggle}
            />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export const LightModeButton = () => {
  const { removeDarkMode } = useDarkMode();
  const theme = useTheme();

  const handleClick = () => {
    removeDarkMode();
    const body = document.querySelector("body");
    if (body) {
      body.style.backgroundColor = theme.palette.primary.light;
    }
  };

  return (
    <IconButton
      data-testid="light-mode-button"
      onClick={handleClick}
      sx={{
        backgroundColor: theme.palette?.neutral?.main || "#506570",
        margin: "0 1rem 0 1rem",
        ":hover": {
          backgroundColor: theme.palette?.neutral?.light || "#b0bec5",
        },
      }}
    >
      <LightModeIcon sx={{ color: "yellow" }} />
    </IconButton>
  );
};

export const DarkModeButton = () => {
  const { setDarkMode } = useDarkMode();
  const theme = useTheme();
  return (
    <IconButton
      data-testid="dark-mode-button"
      onClick={() => {
        setDarkMode();
        const body = document.querySelector("body");
        if (body) {
          body.style.backgroundColor = theme.palette.primary.dark;
        }
      }}
      sx={{
        backgroundColor: theme.palette?.neutral?.light || "#b0bec5",
        margin: "0 1rem 0 1rem",
        ":hover": {
          backgroundColor: theme.palette?.neutral?.main || "#506570",
        },
      }}
    >
      <DarkModeIcon sx={{ color: "#7e57c2" }} />
    </IconButton>
  );
};

export default DashboardAppBar;
