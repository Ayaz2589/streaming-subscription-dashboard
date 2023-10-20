import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
// import TheatersIcon from "@mui/icons-material/Theaters";

const drawerWidth = 240;

enum SideNavItems {
  Dashboard = "Dashboard",
  User = "User",
  Movies = "Movies",
}

interface Props {
  window?: () => Window;
  currentSection: string;
  handleSectionChange: (index: number) => void;
}

const ResponsiveDrawer = (props: Props) => {
  const { window, handleSectionChange, currentSection } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ backgroundColor: "#6f6af8", height: "100vh" }}>
      <Toolbar />
      <List>
        {[SideNavItems.Dashboard, SideNavItems.User].map(
          // to re-add movies, add it to this array
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  handleSectionChange(index);
                }}
              >
                <ListItemIcon>
                  {index === 0 ? (
                    <DashboardIcon sx={{ color: "#fff", fontSize: "2rem" }} />
                  ) : null}
                  {index === 1 ? (
                    <PersonIcon sx={{ color: "#fff", fontSize: "2rem" }} />
                  ) : null}
                  {/* {index === 2 ? <TheatersIcon /> : null} */}
                </ListItemIcon>
                <Typography variant="h5" sx={{ color: "white" }}>
                  {text}
                </Typography>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fff",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{
              color: "#6f6af8",
              padding: ".6rem 0rem",
              fontWeight: "light",
            }}
          >
            {currentSection === "/users" ? "Users" : "Dashboard"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
