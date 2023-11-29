import { DashboardAppBar, DashboardDrawer } from "..";
import Box from "@mui/material/Box";

// interface Props {
//   currentSection: string;
//   handleSectionChange: (index: number) => void;
// }

const Navigation = () => {
  return (
    <Box>
      <DashboardAppBar />
      <DashboardDrawer />
    </Box>
  );
};

export default Navigation;
