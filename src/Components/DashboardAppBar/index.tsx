import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

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
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "primary.light",
        paddingTop: "2rem",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" color="neutral.main">
          {currentSection}
        </Typography>
        {isDesktop ? (
          <SearchBar />
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

export default DashboardAppBar;
