import { service } from "../service";

//报修列表
export function repairsList(page: number) {
    return service.request({
      method: "GET",
      url: "/api/repairs/repairsList",
      params: { page },
    });
  }
  