import Koa from "koa";
import koaBody from "koa-body";
const userRouter = require("../router/user.route");
const orderRouter = require("../router/order.route");
require("reflect-metadata");
const error = require("koa-json-error");

const app = new Koa();

//错误异常处理
interface CustomError extends Error {
  status?: number;
}

app.use(
  error({
    postFormat: (
      e: CustomError,
      { stack, ...rest }: { stack: string; [key: string]: any }
    ) => rest,
  })
);

app.use(koaBody());
app.use(userRouter.routes());
app.use(orderRouter.routes());

module.exports = app;
