// axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://taurgo-8beeb8544be6.herokuapp.com/',
  // baseURL: "http://localhost:5000/",
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
