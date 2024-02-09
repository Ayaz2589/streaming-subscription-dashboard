import axios from "../api";
import { useAuth } from "../context";
import { usePersistantLogin } from ".";
import { useEffect, useCallback } from "react";

const useBackendService = () => {
  const { auth, setAuth, removeAuth } = useAuth();
  const { setPersistantLogin, removePersistantLogin } = usePersistantLogin();

  const refresh = useCallback(async () => {
    try {
      const { data } = await axios.post("/api/auth/token");
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
      await axios.delete("/api/auth/logout");
      removeAuth();
      removePersistantLogin();
    } catch (error) {
      console.log(error);
    }
  }, [removeAuth, removePersistantLogin]);

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

  return { authLogin, authSignup, authLogout };
};

export default useBackendService;
