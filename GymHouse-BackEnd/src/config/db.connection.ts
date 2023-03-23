import { createConnection } from 'typeorm';
require('reflect-metadata');

import config from './db.config';

export const createTypeOrmConnection = async () => {
  try {
    const connection = await createConnection(config);
    console.log('TypeORM连接成功！');

    return connection;
  } catch (error) {
    console.log('TypeORM连接失败：', error);
    throw error;
  }
};