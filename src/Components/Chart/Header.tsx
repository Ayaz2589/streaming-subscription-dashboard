import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ControlledOpenSelect } from "..";

const Header = ({ title }: { title: string }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem",
    }}
  >
    <Typography variant="h6">{title}</Typography>
    <ControlledOpenSelect />
  </Box>
);

export default Header;
