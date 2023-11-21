import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../../../theme";

const Legend = () => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          marginRight: "1rem",
          backgroundColor: theme.palette.primary.main,
        }}
      ></Box>
      <Typography variant="body2">Sales</Typography>
    </Box>
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          marginRight: "1rem",
          backgroundColor: theme.palette.secondary.main,
        }}
      ></Box>
      <Typography variant="body2">Earnings</Typography>
    </Box>
  </Box>
);

export default Legend;
