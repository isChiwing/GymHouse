class UserController {

    async register(ctx:any , next:any){
        ctx.body='用户注册'
    }

    async login(ctx:any , next:any){
        ctx.body='用户登录'
    }
}

module.exports = new UserController();