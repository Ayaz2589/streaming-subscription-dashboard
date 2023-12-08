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
import { SearchBar } from "..";

const drawerWidth = 240;

const DashboardAppBar = ({
  currentSection,
  handleDrawerToggle,
}: {
  currentSection: string;
  handleDrawerToggle: () => void;
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(
    `(min-width:${theme.breakpoints.values.sm}px)`
  );
  const { isDarkMode } = useDarkMode();
  return (
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
              ? theme.palette.neutral.light
              : theme.palette.neutral.main
          }
        >
          {currentSection}
        </Typography>
        {isDesktop ? (
          <Box>
            {isDarkMode ? <LightModeButton /> : <DarkModeButton />}
            <SearchBar />
          </Box>
        ) : (
          <MenuRoundedIcon
            sx={{ color: theme.palette.primary.main, cursor: "pointer" }}
            onClick={handleDrawerToggle}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

const LightModeButton = () => {
  const { removeDarkMode } = useDarkMode();
  const theme = useTheme();
  return (
    <IconButton
      onClick={() => {
        removeDarkMode();
        const body = document.querySelector("body");
        if (body) {
          body.style.backgroundColor = theme.palette.primary.light;
        }
      }}
      sx={{
        backgroundColor: theme.palette.neutral.main,
        margin: "0 1rem 0 1rem",
        ":hover": {
          backgroundColor: theme.palette.neutral.light,
        },
      }}
    >
      <LightModeIcon sx={{ color: "yellow" }} />
    </IconButton>
  );
};

const DarkModeButton = () => {
  const { setDarkMode } = useDarkMode();
  const theme = useTheme();
  return (
    <IconButton
      onClick={() => {
        setDarkMode();
        const body = document.querySelector("body");
        if (body) {
          body.style.backgroundColor = theme.palette.primary.dark;
        }
      }}
      sx={{
        backgroundColor: theme.palette.neutral.light,
        margin: "0 1rem 0 1rem",
        ":hover": {
          backgroundColor: theme.palette.neutral.main,
        },
      }}
    >
      <DarkModeIcon sx={{ color: "#7e57c2" }} />
    </IconButton>
  );
};

export default DashboardAppBar;
