import { useAuth } from "../../../context";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../../hooks";
import { usePersistantLogin } from "../../../hooks";

const UserSettings = () => {
  const { removeAuth } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios();
  const { removePersistantLogin } = usePersistantLogin();

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
      Logout
    </Button>
  );
};

export default UserSettings;
