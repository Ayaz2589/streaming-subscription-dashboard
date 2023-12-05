import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import {
  DashboardIcon,
  ProjectIcon,
  // ClientIcon,
  // FinanceIcon,
} from "../../svg";

import { UserSettings } from "..";
import { SideNavItems } from "../../enums";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import useMediaQuery from "@mui/material/useMediaQuery";

const mobileDrawerWidth = "100%";
const drawerWidth = 240;

interface Props {
  window?: () => Window;
  currentSection: string;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

const DashboardDrawer = ({
  window,
  currentSection,
  handleDrawerToggle,
  mobileOpen,
}: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const SideNavItemsArray = [
    {
      section: SideNavItems.Dashboard,
      index: 0,
      selected: <DashboardIcon fill={theme.palette.primary.main} />,
      notSelected: <DashboardIcon fill={theme.palette.neutral.main} />,
      path: "/dashboard",
    },
    {
      section: SideNavItems.Project,
      index: 1,
      selected: <ProjectIcon fill={theme.palette.primary.main} />,
      notSelected: <ProjectIcon fill={theme.palette.neutral.main} />,
      path: "/project",
    },
  ];

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const isMobile = useMediaQuery(
    `(min-width:${theme.breakpoints.values.sm}px)`
  );

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
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "left", width: "80%", marginLeft: "1rem" }}
            >
              User Dashboard
            </Typography>
            {!isMobile && (
              <CloseRoundedIcon
                sx={{
                  width: "20%",
                  alignSelf: "center",
                  cursor: "pointer",
                }}
                onClick={handleDrawerToggle}
              />
            )}
          </Box>
          {!isMobile && (
            <>
              <Divider sx={{ marginTop: "1rem" }} />
              <TextField
                sx={{ margin: "1rem", width: "90%" }}
                placeholder="Search..."
              />
            </>
          )}
          <List sx={{ marginTop: "3rem" }}>
            {SideNavItemsArray.map((item) => {
              const { index, selected, notSelected, section } = item;
              const isSelected = currentSection === section ?? false;
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(item.path);
                      handleDrawerToggle();
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
            width: mobileDrawerWidth,
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
