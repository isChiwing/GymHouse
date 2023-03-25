const { publishService,articleListService } = require("../service/article.service");

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
    const res = await articleListService(page);
    ctx.body = res;
  }
  
}

module.exports = new ArticleController();
