import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44333",
});

export default api;
