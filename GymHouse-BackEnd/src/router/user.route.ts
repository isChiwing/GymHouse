const Router = require('koa-router')
const {register,login,checkUser} = require('../controller/user.controller')

const userRouter = new Router({prefix:'/user'});

//注册接口
userRouter.post('/register',register)
//登录接口
userRouter.post('/login',login)
//用户检查登录接口
userRouter.get('/checkUser',checkUser)

module.exports = userRouter