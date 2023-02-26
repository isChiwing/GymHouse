import Koa from "koa"
import { Context } from "koa"
import Router from "koa-router"
//import {usersRouter} from './router/users'
import koaBody from "koa-body"

const error = require('koa-json-error')
const app = new Koa()
const usersRouter = require('./router/users')
const articleRouter = require('./router/article')
app.use(koaBody())
app.use(usersRouter.routes())
app.use(articleRouter.routes())
//app.use(error())
app.on('error',(err,ctx)=>{
    ctx.body=err
})

module.exports=app 