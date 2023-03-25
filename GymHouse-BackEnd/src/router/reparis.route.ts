const ReparisRouter = require('koa-router')
const {submitreparis} = require('../controller/reparis.controller')

const repairsRoute = new ReparisRouter({prefix:'/repairs'});

//提交报修
repairsRoute.post('/submitrepairs',submitreparis)

module.exports = repairsRoute