import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
require('reflect-metadata');

@Entity()
export class User {
    
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  userName: string;

  @Column()
  phone: string;

  @Column()
  passWord: string;
}