import { createTypeOrmConnection } from '../config/db.connection';

class UserService{

    /**
     * 注册
     */
    async registerSservice(userName:string, password:string){
        const connection = await createTypeOrmConnection();
        //写入数据库
        return 'success'
    }

    //登录
}

module.exports = new UserService()