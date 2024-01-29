import axios from "axios";

const environment = import.meta.env.MODE
console.log(`Environment is: ${environment}`)

const axiosOptions = {
  baseUrl: environment === "development" ? "http://localhost:8080" : "https://app-backend-62sfwjhbj-ayaz2589.vercel.app",
  headers: {
    "Content-type": "application/json",
  },
}

console.log(axiosOptions.baseUrl)

const api = axios.create(axiosOptions);

export default api;
