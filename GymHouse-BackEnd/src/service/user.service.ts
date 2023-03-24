import { createTypeOrmConnection } from '../config/db.connection';
import {User} from './entity/user.entity'

class UserService{

    /**
     * 注册
     */
    async registerSservice(phone:string, userName:string, passWord:string){
        //调用数据库连接
        const connection = await createTypeOrmConnection();
        const user = connection.getRepository(User);
        const userEntity = new User();

        /**
         * 0:成功 1:注册失败！用户名已存在！ 2:电话、用户名或密码为空
         */
        let flag: number = 0;

        //查找是否存在用户
        const findUser = await user.find({
            where: [{ phone: phone }],
          });

        //写入数据库
        if (!userName || !phone || !passWord) {
            flag = 2;
          } else {
            if (!findUser[0]) {
                userEntity.userName = userName
                userEntity.phone = phone
                userEntity.passWord = passWord
                userEntity.userType = 1
                await user.save(userEntity);
                flag = 0;
            } else {
              flag = 1;
            }
          }

        connection.close();
        return flag
    }

    /**
     * 登录
     */
}

module.exports = new UserService()