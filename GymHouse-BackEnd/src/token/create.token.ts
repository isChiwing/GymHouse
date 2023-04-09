const jwt = require('jsonwebtoken');
import tokenConfig from '../config/token.config'
const {secret} = tokenConfig
 
module.exports = function(userId:number,userName:String,phone:String,userType:number){
  //生成token
  //第一个参数是载荷，用于编码后存储在 token 中的数据
  //第二个是密钥，自己定义的，验证的时候也是要相同的密钥才能解码
  //第三个是options，可以设置 token 的过期时间
  const token = jwt.sign({userId:userId,userName: userName,phone:phone,userType:userType}, secret, {expiresIn: '1m'});
  console.log(token)
  return token;
};
