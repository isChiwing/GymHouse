import { createTypeOrmConnection } from "../config/db.connection";
import { Reparis } from "./entity/repairs.entity";

class ReparisService{
    /**
     * 提交报修
     */
    async submitrepairsService(repairsMsg:any){
        const connection = await createTypeOrmConnection();
        const repairs = connection.getRepository(Reparis);
        const repairsEntity = new Reparis();

        repairsEntity.userName =repairsMsg.name;
        repairsEntity.userId = repairsMsg.userId;
        repairsEntity.phone =repairsMsg.phone;
        repairsEntity.date = repairsMsg.date;
        repairsEntity.trainArea = repairsMsg.area;
        repairsEntity.address = repairsMsg.address;
        repairsEntity.machineNum = repairsMsg.equipment;
        repairsEntity.notes = repairsMsg.notes;

        await repairs.save(repairsEntity);
        connection.close();
        return 0 ;
    }
}

module.exports = new ReparisService();