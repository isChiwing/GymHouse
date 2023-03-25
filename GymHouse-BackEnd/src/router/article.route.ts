const ArticleRouter = require('koa-router')
const {publish,articleList} = require('../controller/article.controller')

const articleRoute = new ArticleRouter({prefix:'/article'});

//发布文章
articleRoute.post('/publish',publish)

//文章列表
articleRoute.get('/articleList',articleList)

module.exports = articleRoute