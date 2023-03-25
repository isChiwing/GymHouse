const { publishService } = require("../service/article.service");

class ArticleController {
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
}

module.exports = new ArticleController();
