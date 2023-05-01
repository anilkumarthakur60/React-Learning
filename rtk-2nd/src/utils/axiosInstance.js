import axios from "axios";
import { apiUrl } from "./api";

const token = localStorage.getItem("access_token");

const axiosInstance = axios.create({
  paramsSerializer: (params) =>
    JSON.stringify(params, { arrayFormat: "repeat" }),
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
  baseURL: apiUrl,
});
console.log("----------logging data--------axiosInstance--", token);

export { axiosInstance };
