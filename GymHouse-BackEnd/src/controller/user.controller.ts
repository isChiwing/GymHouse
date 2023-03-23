const {registerSservice} = require('../service/user.service')
class UserController {

    /**
     * 注册
     */
    async register(ctx:any , next:any){
        //获取界面数据
        const {username,password} = ctx.request.body

        //操作数据库
        const res = await registerSservice(username,password)

        //返回结果
        ctx.body=res
    }

    async login(ctx:any , next:any){
        ctx.body='用户登录'
    }
}

module.exports = new UserController();