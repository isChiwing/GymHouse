const {submitorderService} = require("../service/order.service");

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

  async orderdetail(ctx: any, next: any) {
    //获取界面数据
    //const { phone, userName, passWord } = ctx.request.body;
  }

  async myoderdetail(ctx: any, next: any) {
    //获取界面数据
    //const { phone, userName, passWord } = ctx.request.body;
  }
}

module.exports = new OrderController();
