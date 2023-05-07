const { registerService,loginSservice } = require("../service/user.service");
let createToken = require('../token/create.token')
import decodeToken  from '../token/check.token'
class UserController {
  /**
   * 注册
   */
  async register(ctx: any, next: any) {
    //获取界面数据
    const { phone, userName, passWord } = ctx.request.body;

    //操作数据库
    const res = await registerService(phone, userName, passWord);

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

  /**
   * 登录
   */
  async login(ctx: any, next: any) {
    const { phone, passWord } = ctx.request.body;
    const res = await loginSservice(phone, passWord);
    //console.log(secret);
    //返回结果
    if (res.flag == 0) {
      ctx.body = {
        status: 200,
        message: "登录成功",
        userType: res.findUser.userType,
        token: createToken(res.findUser.userId,res.findUser.userName,res.findUser.phone,res.findUser.userType)
      };
    } else if (res.flag == 1) 
    {
        ctx.throw(500, '用户名不存在或密码错误！')
    }
  }

  async checkUser(ctx: any, next: any){
    const token = ctx.headers.authorization.split(' ')[1]; // 从请求头中获取JWT token
    const flag = await decodeToken(token);
    if(flag == null){
      ctx.body = {status:400,message:"请重新登录！"}
    }else{
      console.log("flag:"+JSON.stringify(flag));
      ctx.body ={status:200,message:JSON.stringify(flag)};
    }
  }
}

module.exports = new UserController();
