import axios from "../api";
import { useAuth } from "../context";
import { usePersistantLogin } from ".";
import { useEffect, useCallback } from "react";

const useAxios = () => {
  const { auth, setAuth } = useAuth();
  const { setPersistantLogin } = usePersistantLogin();

  const refresh = useCallback(async () => {
    try {
      const { data } = await axios.post("/api/dashboardv2/auth/token");
      setAuth({ ...auth, accessToken: data.accessToken });
    } catch (error) {
      console.log(error);
    }
  }, [auth, setAuth]);

  const authLogin = useCallback(
    async (email: string, password: string) => {
      try {
        const response = await axios.post(
          "/api/dashboardv2/auth/login",
          JSON.stringify({ email, password })
        );
        const { accessToken, refreshToken } = response.data;
        const auth = { accessToken, email, password, refreshToken };
        setPersistantLogin(auth);
        setAuth(auth);
      } catch (error) {
        console.log(error);
      }
    },
    [setAuth]
  );

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization && auth?.refreshToken) {
          config.headers.Authorization = `Bearer ${auth.refreshToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error?.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          await refresh();
          originalRequest.headers.Authorization = `Bearer ${auth?.accessToken}`;
          return axios(originalRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(responseInterceptor);
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, [auth, refresh]);

  return axios;
};

export default useAxios;
