import axios from "axios";

export const getAuthent = () => {
  if (typeof window !== "undefined") {
    var userRolesStr = localStorage.getItem("user");
    if (userRolesStr) {
      const userRoles = JSON.parse(userRolesStr);
      return userRoles.accessToken;
    }
  } else {
    return null;
  }
};

export const axiosCf = axios.create({
  baseURL: "http://localhost:3030/",
});

axiosCf.defaults.headers.common["Authorization"] = `Bearer ${getAuthent()}`;
