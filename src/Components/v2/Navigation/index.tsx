import { DashboardAppBar, DashboardDrawer } from "..";
import Box from "@mui/material/Box";

interface Props {
  handleSectionChange: (index: number) => void;
}

const Navigation = (props: Props) => {
  const { handleSectionChange } = props;
  return (
    <Box>
      <DashboardAppBar />
      <DashboardDrawer handleSectionChange={handleSectionChange} />
    </Box>
  );
};

export default Navigation;
