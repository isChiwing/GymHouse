const ArticleRouter = require('koa-router')
const {publish} = require('../controller/article.controller')

const articleRoute = new ArticleRouter({prefix:'/article'});

//发布文章
articleRoute.post('/publish',publish)

module.exports = articleRoute