import { useAxios } from ".";
import { useAuth } from "../context";

const useRefreshToken = () => {
  const axios = useAxios();
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    try {
      const { data } = await axios.post("/api/dashboardv2/auth/token");
      setAuth({ ...auth, accessToken: data.accessToken });
    } catch (error) {
      console.log(error);
    }
  };

  return { refresh };
};

export default useRefreshToken;
