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
  DashboardIcon,
  ProjectIcon,
  ClientIcon,
  FinanceIcon,
} from "../../../svg";

import { UserSettings } from "..";
import { sectionToDisplay } from "../../../utils/v2";
import theme from "../../../theme";
import { SideNavItems } from "../../../enums";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
  currentSection: string;
  handleSectionChange: (index: number) => void;
}

const SideNavItemsArray = [
  {
    section: SideNavItems.Dashboard,
    index: 0,
    selected: <DashboardIcon fill={theme.palette.primary.main} />,
    notSelected: <DashboardIcon fill={theme.palette.neutral.main} />,
  },
  {
    section: SideNavItems.Project,
    index: 1,
    selected: <ProjectIcon fill={theme.palette.primary.main} />,
    notSelected: <ProjectIcon fill={theme.palette.neutral.main} />,
  },
  {
    section: SideNavItems.Client,
    index: 2,
    selected: <ClientIcon fill={theme.palette.primary.main} />,
    notSelected: <ClientIcon fill={theme.palette.neutral.main} />,
  },
  {
    section: SideNavItems.Finance,
    index: 3,
    selected: <FinanceIcon fill={theme.palette.primary.main} />,
    notSelected: <FinanceIcon fill={theme.palette.neutral.main} />,
  },
];

const DashboardDrawer = ({
  window,
  handleSectionChange,
  currentSection,
}: Props) => {
  console.log(currentSection);
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
              const { index, selected, notSelected, section } = item;
              const isSelected =
                sectionToDisplay(currentSection) === section ?? false;
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      handleSectionChange(item.index);
                    }}
                    selected={isSelected}
                  >
                    <ListItemIcon>
                      {isSelected ? selected : notSelected}
                    </ListItemIcon>
                    <Typography
                      variant="h6"
                      color={isSelected ? "primary.main" : "neutral.main"}
                    >
                      {section}
                    </Typography>
                  </ListItemButton>
                  <Box
                    sx={{
                      width: "0.5rem",
                      backgroundColor: isSelected
                        ? "primary.main"
                        : "neutral.light",
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
