import axios from "axios";

export const getAuthent = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("authent");
  } else {
    return null;
  }
};

export const axiosCf = axios.create({
  baseURL: "http://localhost:3001/",
});

axiosCf.defaults.headers.common["Authorization"] = `Bearer ${getAuthent()}`;
