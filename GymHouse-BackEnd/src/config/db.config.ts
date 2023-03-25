import { ConnectionOptions } from 'typeorm';
import 'reflect-metadata';
import { User } from '../service/entity/user.entity';
import { Order } from '../service/entity/order.entity';
import { Reparis } from '../service/entity/repairs.entity';
import { Article } from '../service/entity/article.entity';

const config: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'GymHouse',
  entities: [User,Order,Reparis,Article],
  synchronize: false,
};

export default config;