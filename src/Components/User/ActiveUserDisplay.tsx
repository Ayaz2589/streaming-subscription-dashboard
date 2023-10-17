import { Paper, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const ActiveUserDisplay = ({ count }: { count: string }) => {
  return (
    <Paper
      sx={{
        width: 400,
        padding: "50px",
        borderRadius: "1rem",
        backgroundColor: "#eee",
        height: 135,
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <PersonIcon sx={{ fontSize: "2rem" }} />
      <Typography variant="h5">Active Users: {count}</Typography>
    </Paper>
  );
};

export default ActiveUserDisplay;
