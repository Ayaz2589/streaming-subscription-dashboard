import { DashboardAppBar, DashboardDrawer } from "..";
import Box from "@mui/material/Box";

interface Props {
  currentSection: string;
}

const Navigation = ({ currentSection }: Props) => {
  return (
    <Box>
      <DashboardAppBar currentSection={currentSection} />
      <DashboardDrawer currentSection={currentSection} />
    </Box>
  );
};

export default Navigation;
