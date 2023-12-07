import { useAuth, useDarkMode } from "../../context";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks";
import { usePersistantLogin } from "../../hooks";

const UserSettings = () => {
  const { removeAuth } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios();
  const { removePersistantLogin } = usePersistantLogin();
  const { isDarkMode } = useDarkMode();
  const theme = useTheme();

  const handleLogout = async () => {
    try {
      await axios.delete("/api/dashboardv2/auth/logout");
      removeAuth();
      removePersistantLogin();
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button sx={{ marginBottom: "1rem" }} onClick={handleLogout}>
      <Typography
        color={
          isDarkMode ? theme.palette.neutral.light : theme.palette.neutral.main
        }
      >
        Logout
      </Typography>
    </Button>
  );
};

export default UserSettings;
