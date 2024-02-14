import { useState } from "react";
import { DashboardAppBar, DashboardDrawer } from "..";
import Box from "@mui/material/Box";

interface Props {
  currentSection: string;
  children: React.ReactNode;
}

const Navigation = ({ currentSection, children }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <DashboardAppBar
          currentSection={currentSection}
          handleDrawerToggle={handleDrawerToggle}
        />
        <DashboardDrawer
          currentSection={currentSection}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Navigation;
