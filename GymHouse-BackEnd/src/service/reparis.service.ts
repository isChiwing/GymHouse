import { createTypeOrmConnection } from "../config/db.connection";
import { Reparis } from "./entity/repairs.entity";

class ReparisService {
  /**
   * 提交报修
   */
  async submitrepairsService(repairsMsg: any) {
    const connection = await createTypeOrmConnection();
    const repairs = connection.getRepository(Reparis);
    const repairsEntity = new Reparis();

    repairsEntity.userName = repairsMsg.name;
    repairsEntity.userId = repairsMsg.userId;
    repairsEntity.phone = repairsMsg.phone;
    repairsEntity.date = repairsMsg.date;
    repairsEntity.trainArea = repairsMsg.area;
    repairsEntity.address = repairsMsg.address;
    repairsEntity.machineNum = repairsMsg.equipment;
    repairsEntity.notes = repairsMsg.notes;

    await repairs.save(repairsEntity);
    connection.close();
    return 0;
  }

  /**
   * 报修列表
   */
  async repairsListService(page: number) {
    const connection = await createTypeOrmConnection();
    const repairs = connection.getRepository(Reparis);
    const repairsEntity = new Reparis();

    const repairsList = await repairs.find({});
    const count = repairsList.length;

    const findRepairs = await repairs.find({
      order: {
        date: "DESC",
      },
      skip: (page - 1) * 10,
      take: 10,
    });

    connection.close();
    return {
      data: findRepairs,
      count: count,
      page: page,
    };
  }

  /**
   * 报修列表-按用户
   */
  async repairsByUserService(page: number, userId: number) {
    const connection = await createTypeOrmConnection();
    const repairs = connection.getRepository(Reparis);
    const repairsEntity = new Reparis();

    const repairsList = await repairs.find({
      where: [{ userId: userId }],
    });
    const count = repairsList.length;

    const findRepairs = await repairs.find({
      where: [{ userId: userId }],
      order: {
        date: "DESC",
      },
      skip: (page - 1) * 10,
      take: 10,
    });

    connection.close();
    return {
      data: findRepairs,
      count: count,
      page: page,
    };
  }
}

module.exports = new ReparisService();
