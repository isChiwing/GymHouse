import { createTypeOrmConnection } from "../config/db.connection";
import { Order } from "./entity/order.entity";

class OrderService {
    /**
     * 提交预约
     */
    async submitorderService( orderMsg:any ) {
        const connection = await createTypeOrmConnection();
        const order = connection.getRepository(Order);
        const orderEntity = new Order();

        orderEntity.userName =orderMsg.name;
        orderEntity.userId = orderMsg.userId;
        orderEntity.phone =orderMsg.phone;
        orderEntity.date = orderMsg.date;
        orderEntity.time = orderMsg.time;
        orderEntity.address = orderMsg.address;
        orderEntity.trainMode = orderMsg.trainMode;
        orderEntity.notes = orderMsg.notes;

        await order.save(orderEntity);
        connection.close();
        return 0;
    }

}

module.exports = new OrderService();