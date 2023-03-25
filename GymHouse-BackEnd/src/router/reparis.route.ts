const ReparisRouter = require('koa-router')
const {submitreparis,repairsList,repairsByUser} = require('../controller/reparis.controller')

const repairsRoute = new ReparisRouter({prefix:'/repairs'});

//提交报修
repairsRoute.post('/submitrepairs',submitreparis)

//报修列表
repairsRoute.get('/repairsList',repairsList)

//报修列表--用户
repairsRoute.get('/repairsByUser',repairsByUser)

module.exports = repairsRoute