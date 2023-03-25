import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
require('reflect-metadata');

@Entity({name: 'article'})
export class Article {
    
  @PrimaryGeneratedColumn()
  articleId: number;

  @Column()
  userId : number;

  @Column()
  author : string;

  @Column()
  title : string;

  @Column()
  content: string;

  @Column()
  articleType: number;

  @Column()
  publishTime: string;

}