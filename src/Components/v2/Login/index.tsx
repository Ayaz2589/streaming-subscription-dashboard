import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Login = () => {
  return (
    <Stack>
      <Typography variant="h1">Authentication</Typography>
      <TextField label="Email" variant="outlined" />
      <TextField label="Password" variant="outlined" />
      <Button variant="contained">Login</Button>
    </Stack>
  );
};

export default Login;
