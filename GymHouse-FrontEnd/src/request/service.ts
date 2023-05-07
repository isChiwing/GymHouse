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

    const token = localStorage.getItem('token'); // 从本地存储获取token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 将token添加到请求头
    }
    
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
