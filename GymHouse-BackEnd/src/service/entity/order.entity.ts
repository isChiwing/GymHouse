import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
require('reflect-metadata');

@Entity({name: 'order'})
export class Order {
    
  @PrimaryGeneratedColumn()
  orderId: number;

  @Column()
  userId : number;

  @Column()
  userName: string;

  @Column()
  phone: string;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  address: string;

  @Column()
  trainMode: string;

  @Column()
  notes: string;

  @Column()
  createTime: string;
}