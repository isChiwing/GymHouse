import Koa from "koa"
import koaBody from "koa-body"
const userRouter = require('../router/user.route')

const app = new Koa()

app.use(koaBody())
app.use(userRouter.routes())

module.exports = app