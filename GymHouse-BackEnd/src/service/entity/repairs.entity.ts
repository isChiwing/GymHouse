import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
require('reflect-metadata');

@Entity({name: 'reparis'})
export class Reparis {
    
  @PrimaryGeneratedColumn()
  repairsId: number;

  @Column()
  userId : number;

  @Column()
  userName : string;

  @Column()
  phone : string;

  @Column()
  date: string;

  @Column()
  trainArea: string;

  @Column()
  address: string;

  @Column()
  machineNum: string;

  @Column()
  notes: string;

  @Column()
  createTime: string;
}