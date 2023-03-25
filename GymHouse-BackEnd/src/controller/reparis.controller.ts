const {submitrepairsService} = require("../service/reparis.service");

class repairsController{
    async submitreparis(ctx: any, next: any) {
        //获取界面数据
        const { name,phone,date,area,address,equipment,note,userId } = ctx.request.body;
        const repairsMsg = { name,phone,date,area,address,equipment,note,userId };
        const res = await submitrepairsService(repairsMsg);
        if (res == 0) {
            ctx.body = {
              status: 200,
              message: "提交报修成功",
            };
          }
    }
}

module.exports = new repairsController();