import { DashboardAppBar, DashboardDrawer } from "..";
import Box from "@mui/material/Box";

interface Props {
  currentSection: string;
  handleSectionChange: (index: number) => void;
}

const Navigation = ({ handleSectionChange, currentSection }: Props) => {
  return (
    <Box>
      <DashboardAppBar currentSection={currentSection} />
      <DashboardDrawer handleSectionChange={handleSectionChange} />
    </Box>
  );
};

export default Navigation;
