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
  date: number;

  @Column()
  time: number;

  @Column()
  address: number;

  @Column()
  trainMode: number;

  @Column()
  notes: number;
}