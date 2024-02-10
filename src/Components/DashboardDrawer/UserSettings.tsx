import { useState } from "react";
import { useDarkMode } from "../../context";
import { LoadingButton } from "@mui/lab";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserAuthentication } from "../../hooks";

const UserSettings = () => {
  const navigate = useNavigate();
  const { authLogout } = useUserAuthentication();
  const { isDarkMode } = useDarkMode();
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await authLogout();
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
