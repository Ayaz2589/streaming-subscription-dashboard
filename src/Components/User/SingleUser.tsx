import { useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SingleUser = () => {
  const location = useLocation();
  const { selectedUser } = location.state;
  console.log(selectedUser);
  return (
    <Box>
      <Paper elevation={0} sx={{ backgroundColor: "#eee" }}>
        <Box sx={{ display: "flex" }}>
          <img src={selectedUser.avatar} height={150} width={150} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <Typography variant="h4">
              {selectedUser.personal_information.fullName}
            </Typography>
            <Typography variant="h5">{selectedUser.email}</Typography>
            <Typography variant="h6">{`User ID: ${selectedUser.username}`}</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default SingleUser;
