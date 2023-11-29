import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { SearchBar } from "..";

const drawerWidth = 240;

const DashboardAppBar = () => {
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
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default DashboardAppBar;
