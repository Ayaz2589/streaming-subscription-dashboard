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

import { UserSettings } from "..";

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
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginTop: "-0.9rem" }}
          >
            User Dashboard
          </Typography>
          <List sx={{ marginTop: "3rem" }}>
            {[SideNavItems.Dashboard, SideNavItems.User].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleSectionChange(index);
                  }}
                  selected={index === 0}
                >
                  <ListItemIcon>
                    {index === 0 ? (
                      <DashboardIcon sx={{ fontSize: "1.7rem", color: "primary.main" }} />
                    ) : null}
                    {index === 1 ? (
                      <PersonIcon sx={{ fontSize: "1.7rem" }} />
                    ) : null}
                  </ListItemIcon>
                  <Typography variant="button">{text}</Typography>
                </ListItemButton>
                <Box
                  sx={{
                    width: "0.5rem",
                    backgroundColor: index === 0 ? "primary.main" : "",
                    height: "2.7rem",
                  }}
                ></Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <UserSettings />
      </Box>
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
            border: "none",
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
