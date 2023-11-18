import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const UserSettings = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "3.5rem",
          height: "3.5rem",
          backgroundColor: "primary.main",
          borderRadius: "50%",
          margin: "1rem",
        }}
      ></Box>
      <Typography sx={{ alignSelf: "center" }}>Ayaz Uddin</Typography>
    </Box>
  );
};

export default UserSettings;
