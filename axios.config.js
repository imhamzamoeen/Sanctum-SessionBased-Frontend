import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_APP_URL_LOCAL,
});

export default axiosInstance;
