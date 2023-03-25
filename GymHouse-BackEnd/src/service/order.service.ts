import { createTypeOrmConnection } from "../config/db.connection";
import { Order } from "./entity/order.entity";

class OrderService {
  /**
   * 提交预约
   */
  async submitorderService(orderMsg: any) {
    const connection = await createTypeOrmConnection();
    const order = connection.getRepository(Order);
    const orderEntity = new Order();

    orderEntity.userName = orderMsg.name;
    orderEntity.userId = orderMsg.userId;
    orderEntity.phone = orderMsg.phone;
    orderEntity.date = orderMsg.date;
    orderEntity.time = orderMsg.time;
    orderEntity.address = orderMsg.address;
    orderEntity.trainMode = orderMsg.trainMode;
    orderEntity.notes = orderMsg.notes;

    await order.save(orderEntity);
    connection.close();
    return 0;
  }

  /**
   * 预约列表
   */
  async orderListService(page: number) {
    const connection = await createTypeOrmConnection();
    const order = connection.getRepository(Order);
    const orderEntity = new Order();

    const orderList = await order.find({});
    const count = orderList.length;

    const findOrder = await order.find({
      order: {
        date: "DESC",
      },
      skip: (page - 1) * 10,
      take: 10,
    });

    connection.close();
    return {
      data: findOrder,
      count: count,
      page: page,
    };
  }

  /**
   * 预约列表-按用户
   */
  async orderByUserService(page: number,userId:number) {
    const connection = await createTypeOrmConnection();
    const order = connection.getRepository(Order);
    const orderEntity = new Order();

    const orderList = await order.find({
        where: [{ userId: userId }]
    });
    const count = orderList.length;

    const findOrder = await order.find({
      where: [{ userId: userId }],
      order: {
        date: "DESC",
      },
      skip: (page - 1) * 10,
      take: 10,
    });

    connection.close();
    return {
      data: findOrder,
      count: count,
      page: page,
    };
  }
}

module.exports = new OrderService();
