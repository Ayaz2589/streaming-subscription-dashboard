import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { UserIcon } from "../../../svg";

const UserSettings = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "50%",
          margin: "1rem",
        }}
      >
        <UserIcon />
      </Box>
      <Typography sx={{ alignSelf: "center" }}>Ayaz Uddin</Typography>
    </Box>
  );
};

export default UserSettings;
