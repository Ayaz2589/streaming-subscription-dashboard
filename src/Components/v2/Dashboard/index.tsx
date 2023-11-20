import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Dashboard = ({
  handleSectionChange,
}: {
  handleSectionChange: (index: number) => void;
}) => {
  return (
    <Box paddingTop={"5rem"}>
      <Typography variant="h1">Dashboard</Typography>
    </Box>
  );
};

export default Dashboard;
