import axios from "axios";

const api = axios.create({
  baseURL: "https://app-backend-62sfwjhbj-ayaz2589.vercel.app",
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
