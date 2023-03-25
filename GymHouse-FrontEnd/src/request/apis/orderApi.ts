import { service } from "../service";

//预约列表
export function orderList(page: number) {
  return service.request({
    method: "GET",
    url: "/api/order/orderList",
    params: { page },
  });
}
