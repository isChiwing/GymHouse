import { service } from "../service";

//登录
export function login(data: { phone: string; password: string }) {
  return service.request({
    method: "POST",
    url: "/api/user/login",
    data,
  });
}

//注册
export function register(data: { phone: string; userName: string; passWord: string }) {
    return service.request({
      method: "POST",
      url: "/api/user/register",
      data,
    });
  }

//用户检查
export function checkUser() {
  return service.request({
    method: "GET",
    url: "/api/user/checkUser"
  });
}