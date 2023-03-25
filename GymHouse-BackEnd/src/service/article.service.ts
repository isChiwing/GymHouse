import { createTypeOrmConnection } from "../config/db.connection";
import { Article } from "./entity/article.entity";

class ArticleService {
  /**
   * 发布文章
   */
  async publishService(articleMsg: any) {
    const connection = await createTypeOrmConnection();
    const article = connection.getRepository(Article);
    const articleEntity = new Article();

    const date = new Date();
    const nowDate = date.toLocaleDateString();

    articleEntity.author = articleMsg.author;
    articleEntity.userId = articleMsg.userId;
    articleEntity.title = articleMsg.title;
    articleEntity.content = articleMsg.text;
    articleEntity.articleType = articleMsg.type;
    articleEntity.publishTime = nowDate;

    await article.save(articleEntity);
    connection.close();
    return 0;
  }

  /**
   * 文章列表
   */
  async articleListService(page: number) {
    const connection = await createTypeOrmConnection();
    const article = connection.getRepository(Article);
    const articleEntity = new Article();

    const articleList = await article.find({});
    const count = articleList.length;

    const findArticle = await article.find({
      order: {
        publishTime: "DESC",
      },
      skip: (page - 1) * 10,
      take: 10,
    });

    connection.close();
    return {
      data: findArticle,
      count: count,
      page: page,
    };
  }
}

module.exports = new ArticleService();
