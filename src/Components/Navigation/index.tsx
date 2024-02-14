import { useState } from "react";
import { DashboardAppBar, DashboardDrawer } from "..";
import Box from "@mui/material/Box";

interface Props {
  children: React.ReactNode;
}

const Navigation = ({ children }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <DashboardAppBar handleDrawerToggle={handleDrawerToggle} />
        <DashboardDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Navigation;
