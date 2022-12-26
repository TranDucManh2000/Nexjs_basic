import axios from "axios";
export const axiosCf = axios.create({
  baseURL: "http://localhost:3001/",
});

const author = "authent";
axiosCf.defaults.headers.common["Authorization"] = `Bearer ${author}`;
