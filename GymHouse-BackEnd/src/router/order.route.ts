const OrderRouter = require('koa-router')
const {submitorder, orderdetail, myoderdetail} = require('../controller/order.controller')

const orderRoute = new OrderRouter({prefix:'/order'});

//提交预约
orderRoute.post('/submitorder',submitorder)

//所有预约记录
orderRoute.get('/orderdetail',orderdetail)

//用户预约记录
orderRoute.get('/myoderdetail',myoderdetail)

module.exports = orderRoute