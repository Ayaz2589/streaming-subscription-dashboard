import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  DashboardIconSelected,
  ProjectIconNotSelected,
  ClientIconNotSelected,
  FinanceIconNotSelected,
} from "../../../svg";

import { UserSettings } from "..";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
  handleSectionChange: (index: number) => void;
}

enum SideNavItems {
  Dashboard = "Dashboard",
  Project = "Project",
  Client = "Client",
  Finance = "Finance",
}

const SideNavItemsArray = [
  {
    section: SideNavItems.Dashboard,
    index: 0,
    icon: <DashboardIconSelected />,
  },
  { section: SideNavItems.Project, index: 1, selected: <ProjectIconNotSelected /> },
  { section: SideNavItems.Client, index: 2, icon: <ClientIconNotSelected /> },
  { section: SideNavItems.Finance, index: 3, icon: <FinanceIconNotSelected /> },
];

const DashboardDrawer = ({ window, handleSectionChange }: Props) => {
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
            {SideNavItemsArray.map((item) => {
              const { index, icon, section } = item;
              console.log(section);
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      handleSectionChange(item.index);
                    }}
                    selected={index === 0}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <Typography
                      variant="h6"
                      color={index === 0 ? "primary.main" : "neutral.main"}
                    >
                      {section}
                    </Typography>
                  </ListItemButton>
                  <Box
                    sx={{
                      width: "0.5rem",
                      backgroundColor: index === 0 ? "primary.main" : "",
                      height: "3rem",
                    }}
                  ></Box>
                </ListItem>
              );
            })}
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
          keepMounted: true,
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
