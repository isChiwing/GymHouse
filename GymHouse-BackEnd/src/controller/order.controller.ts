const {submitorderService,orderListService,orderByUserService} = require("../service/order.service");

class OrderController {
  async submitorder(ctx: any, next: any) {
    //获取界面数据
    const { name, phone, date, time, address, trainMode, note , userId } = ctx.request.body;
    const orderMsg = { name, phone, date, time, address, trainMode, note,userId };
    const res = await submitorderService(orderMsg);
    if (res == 0) {
      ctx.body = {
        status: 200,
        message: "提交预约成功",
      };
    }
  }

  async orderList(ctx: any, next: any) {
    //获取界面数据
    const  page  = ctx.query.page;
    const res = await orderListService(page);
    ctx.body = res;
  }

  async orderByUser(ctx: any, next: any) {
    //获取界面数据
    const  page  = ctx.query.page;
    const  userId  = ctx.query.userId;
    const res = await orderByUserService(page,userId);
    ctx.body = res;
  }
}

module.exports = new OrderController();
