import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Legend = ({ item1, item2 }: { item1: string; item2: string }) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          marginRight: "1rem",
          backgroundColor: "primary.main",
        }}
      ></Box>
      <Typography variant="body2">{item1}</Typography>
    </Box>
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          marginRight: "1rem",
          backgroundColor: "secondary.main",
        }}
      ></Box>
      <Typography variant="body2">{item2}</Typography>
    </Box>
  </Box>
);

export default Legend;
