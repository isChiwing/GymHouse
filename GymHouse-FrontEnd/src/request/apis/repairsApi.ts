import { service } from "../service";

//报修列表
export function repairsList(page: number) {
  return service.request({
    method: "GET",
    url: "/api/repairs/repairsList",
    params: { page },
  });
}

//提交预约
export function submitrepairs(data: {
  name: string;
  phone: string;
  date: string;
  area: string;
  address: string;
  equipment: string;
  note: string;
}) {
  return service.request({
    method: "POST",
    url: "/api/repairs/submitrepairs",
    data,
  });
}

//报修列表-用户
export function repairsByUser(page: number, userId: number) {
  return service.request({
    method: "GET",
    url: "/api/repairs/repairsByUser",
    params: { page, userId },
  });
}
