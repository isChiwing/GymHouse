import axios from "axios";

export const apiHost = "localhost:5173";

const service = axios.create({
  baseURL: `http://${apiHost}/`,
});

/**
 * 拦截器
 */
service.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  function (response) {
    // Before response
    if (response.status !== 200) {
      return Promise.reject(new Error(`Response code: ${response.status}`));
    }
    return response;
  },
  function (error) {
    // When response error
    return Promise.reject(error);
  }
);

export { service };
