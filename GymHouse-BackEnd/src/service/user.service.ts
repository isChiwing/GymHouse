import { createTypeOrmConnection } from "../config/db.connection";
import { User } from "./entity/user.entity";
const bcrypt = require("bcryptjs");

class UserService {
  /**
   * 注册
   */
  async registerService(phone: string, userName: string, passWord: string) {
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
        //加密
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(passWord, salt);

        userEntity.userName = userName;
        userEntity.phone = phone;
        userEntity.passWord = hash;
        userEntity.userType = 1;
        await user.save(userEntity);
        flag = 0;
      } else {
        flag = 1;
      }
    }

    connection.close();
    return flag;
  }



  /**
   * 登录
   */
  async loginSservice(phone: string, passWord: string) {
    //调用数据库连接
    const connection = await createTypeOrmConnection();
    const user = connection.getRepository(User);

    /** 0:成功 1:用户名不存在或密码错误 */
    let flag={
      flag:1,
      findUser:{}
    };

    //查询用户
    const findUser = await user.find({
      where: [{ phone: phone }],
    });

    //判断是否查到用户
    if (!findUser[0]) {
      flag.flag = 1;
    } else {
      //判断用户名和密码
      if (bcrypt.compareSync(passWord, findUser[0].passWord)) {
        //console.log(findUser[0])
        flag.flag = 0;
        flag.findUser=findUser[0]
      } else {
        flag.flag = 1;
      }
    }

    connection.close();

    return flag;
  }

}

module.exports = new UserService();
