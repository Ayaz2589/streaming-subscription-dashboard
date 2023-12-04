import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context";

const useAxios = () => {
  const { auth } = useAuth();
  const [refreshToken, setRefreshToken] = useState<null | string>(null);

  const setRefreshTokenToAxiosHeader = (refreshToken: string) => {
    setRefreshToken(refreshToken);
  };

  const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-type": "application/json",
    },
  });

  api.interceptors.request.use(
    (config) => {
      if (refreshToken) {
        config.headers.Authorization = `Bearer ${refreshToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return { axios: api, setRefreshTokenToAxiosHeader };
};

export default useAxios;
