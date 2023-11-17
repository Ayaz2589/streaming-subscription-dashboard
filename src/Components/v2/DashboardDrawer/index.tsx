import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
  handleSectionChange: (index: number) => void;
}

enum SideNavItems {
  Dashboard = "Dashboard",
  User = "User",
  Movies = "Movies",
}

const DashboardDrawer = (props: Props) => {
  const { window, handleSectionChange } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box sx={{ backgroundColor: "red", height: "100vh" }}>
      <Toolbar />
      <List>
        {[SideNavItems.Dashboard, SideNavItems.User].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                handleSectionChange(index);
              }}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <DashboardIcon sx={{ color: "red", fontSize: "2rem" }} />
                ) : null}
                {index === 1 ? (
                  <PersonIcon sx={{ color: "red", fontSize: "2rem" }} />
                ) : null}
              </ListItemIcon>
              <Typography variant="h5" sx={{ color: "red" }}>
                {text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
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
  );
};

export default DashboardDrawer;
