const { registerSservice } = require("../service/user.service");
class UserController {
  /**
   * 注册
   */
  async register(ctx: any, next: any) {
    //获取界面数据
    const { phone, userName, passWord } = ctx.request.body;

    //操作数据库
    const res = await registerSservice(phone, userName, passWord);

    //返回结果
    if (res == 0) {
      ctx.body = {
        status: 200,
        message: "注册成功",
      };
    } else if (res == 1) {
        ctx.throw(500, '注册失败！电话已存在！')
    } else if (res == 2) {
        ctx.throw(500, '电话、用户名或密码为空')
    }
  }

  async login(ctx: any, next: any) {
    ctx.body = "用户登录";
  }
}

module.exports = new UserController();
