import axios from "axios";

const api = axios.create({
  baseURL: "https://app-backend-api-seven.vercel.app", // for production
  // baseURL: "http://localhost:8080", // for development
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
