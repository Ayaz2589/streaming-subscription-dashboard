import { useState } from "react";
import { useAuth, useDarkMode } from "../../context";
import { LoadingButton } from "@mui/lab";
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
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.delete("/api/dashboardv2/auth/logout");
      removeAuth();
      removePersistantLogin();
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoadingButton
      sx={{
        marginBottom: "1rem",
        color: isDarkMode
          ? theme.palette.neutral.light
          : theme.palette.neutral.main,
      }}
      onClick={handleLogout}
      loading={loading}
    >
      Log out
    </LoadingButton>
  );
};

export default UserSettings;
