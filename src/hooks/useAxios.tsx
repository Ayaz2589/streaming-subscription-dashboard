import axios from "axios";
import { useAuth } from "../context";

const useAxios = () => {
  const { auth } = useAuth();
  const { refreshToken } = auth;
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

  return api;
};

export default useAxios;
