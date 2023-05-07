const { publishService,articleListService } = require("../service/article.service");
import decodeToken  from '../token/check.token'

class ArticleController {
  /**
   * 发布文章
   */
  async publish(ctx: any, next: any) {
    //获取界面数据
    const { title, type, author, text, userId } = ctx.request.body;
    const articleMsg = { title, type, author, text, userId };
    const res = await publishService(articleMsg);
    if (res == 0) {
      ctx.body = {
        status: 200,
        message: "发布文章成功",
      };
    }
  }

  /**
   * 文章列表
   */
  async articleList(ctx: any, next: any) {
    const  page  = ctx.query.page;
    const token = ctx.headers.authorization.split(' ')[1]; // 从请求头中获取JWT token
    const flag = await decodeToken(token);
    console.log("flag:"+JSON.stringify(flag));
    const res = await articleListService(page);
    ctx.body = res;
  }
  
}

module.exports = new ArticleController();
