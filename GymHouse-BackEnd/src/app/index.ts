import Koa from "koa"
import koaBody from "koa-body"
const userRouter = require('../router/user.route')
require('reflect-metadata');

const app = new Koa()

app.use(koaBody())
app.use(userRouter.routes())

module.exports = app