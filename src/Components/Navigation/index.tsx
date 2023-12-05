import { useState } from "react";
import { DashboardAppBar, DashboardDrawer } from "..";
import Box from "@mui/material/Box";

interface Props {
  currentSection: string;
}

const Navigation = ({ currentSection }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(true);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
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
  );
};

export default Navigation;
