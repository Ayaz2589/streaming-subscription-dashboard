import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ControlledOpenSelect } from "..";

const Header = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem",
    }}
  >
    <Typography variant="h6">Sales vs Earnings</Typography>
    <ControlledOpenSelect />
  </Box>
);

export default Header;
