import Axios from "axios";

const baseURL = ""; //We need to put base url into here. Currently, there is no common baseURL in backend.

export const axios = Axios.create({
  baseURL,
});

axios.interceptors.request.use(
  async function (config) {
    config.headers["Authorization"] = "*";
    config.headers["Content-Type"] = "*";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
