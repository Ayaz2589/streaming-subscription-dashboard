import axios from "../api";
import { useAuth } from "../context";
import { usePersistantLogin } from ".";
import { useEffect, useCallback } from "react";

const useBackendService = () => {
  const { auth, setAuth, removeAuth } = useAuth();
  const { setPersistantLogin, removePersistantLogin, getPersistantLogin } =
    usePersistantLogin();

  const refresh = useCallback(async () => {
    try {
      const { data } = await axios.post("/api/auth/token");
      setPersistantLogin({ ...auth, accessToken: data.accessToken });
      setAuth({ ...auth, accessToken: data.accessToken });
    } catch (error) {
      console.log(error);
    }
  }, [auth, setAuth]);

  const authLogin = useCallback(
    async (email: string, password: string) => {
      try {
        const response = await axios.post(
          "/api/auth/login",
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

  const authSignup = useCallback(
    async (email: string, password: string) => {
      try {
        const response = await axios.post(
          "/api/auth/signup",
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

  const authLogout = useCallback(async () => {
    try {
      await axios.delete("/api/auth/logout", {
        data: { refreshToken: auth.refreshToken },
      });
      removeAuth();
      removePersistantLogin();
    } catch (error) {
      console.log(error);
    }
  }, [removeAuth, removePersistantLogin]);

  const getDashboardChartData = useCallback(async () => {
    try {
      const response = await axios.get("/api/dashboard/chart-data/dashboard");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const currentAuth = getPersistantLogin();
        if (auth.accessToken) {
          config.headers.Authorization = `Bearer ${auth.accessToken}`;
          return config;
        }
        if (currentAuth) {
          config.headers.Authorization = `Bearer ${currentAuth.accessToken}`;
          return config;
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

  return { authLogin, authSignup, authLogout, getDashboardChartData };
};

export default useBackendService;
