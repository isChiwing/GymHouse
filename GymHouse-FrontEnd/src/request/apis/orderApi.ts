import { service } from "../service";

//预约列表
export function orderList(page: number) {
  return service.request({
    method: "GET",
    url: "/api/order/orderList",
    params: { page },
  });
}

//提交预约
export function submitorder(data: {
    name: string;
    phone: string;
    date: string;
    time: string;
    address: string;
    trainer: string;
    note: string;
  }) {
    return service.request({
      method: "POST",
      url: "/api/order/submitorder",
      data,
    });
  }