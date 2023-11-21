import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { SearchBar } from "..";

const drawerWidth = 240;

const sectionToDisplay = (currentSection: string) => {
  switch (currentSection) {
    case "/":
      return "Dashboard";
    case "/project":
      return "Project";
    case "/client":
      return "Client";
    case "/finance":
      return "Finance";
    default:
      return "Dashboard";
  }
};

const DashboardAppBar = ({ currentSection }: { currentSection: string }) => {
  const sectiontoDisplay = sectionToDisplay(currentSection);
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
        <Typography variant="h4" color="neutral.dark" fontWeight="bold">
          {sectiontoDisplay}
        </Typography>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default DashboardAppBar;
