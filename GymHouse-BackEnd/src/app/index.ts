import Koa from "koa"

const app = new Koa()

const userRouter = require('../router/user.route')

app.use(userRouter.routes())

module.exports = app