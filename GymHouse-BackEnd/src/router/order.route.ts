const OrderRouter = require('koa-router')
const {submitorder, orderList, orderByUser} = require('../controller/order.controller')

const orderRoute = new OrderRouter({prefix:'/order'});

//提交预约
orderRoute.post('/submitorder',submitorder)

//所有预约记录
orderRoute.get('/orderList',orderList)

//用户预约记录
orderRoute.get('/orderByUser',orderByUser)

module.exports = orderRoute