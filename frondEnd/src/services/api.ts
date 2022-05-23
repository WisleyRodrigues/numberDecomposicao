import axios from "axios";

const api = axios.create({
  baseURL: "https://teste-frame-back.herokuapp.com",
});

export default api;