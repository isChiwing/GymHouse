const Router = require('koa-router')
const {register,login} = require('../controller/user.controller')

const userRouter = new Router({prefix:'/user'});

//注册接口
userRouter.post('/register',register)
//登录接口
userRouter.post('/login',login)


module.exports = userRouter