import { createTypeOrmConnection } from "../config/db.connection";
import { Article } from "./entity/article.entity";

class ArticleService{
    /**
     * 发布文章
     */
    async publishService(articleMsg:any){
        const connection = await createTypeOrmConnection();
        const article = connection.getRepository(Article);
        const articleEntity = new Article();

        const date = new Date();
        const nowDate = date.toLocaleDateString();

        articleEntity.author =articleMsg.author;
        articleEntity.userId = articleMsg.userId;
        articleEntity.title =articleMsg.title;
        articleEntity.content = articleMsg.text;
        articleEntity.articleType = articleMsg.type;
        articleEntity.publishTime = nowDate;

        await article.save(articleEntity);
        connection.close();
        return 0 ;
    }
}

module.exports = new ArticleService();