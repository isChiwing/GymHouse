
const checkJwt = require('jsonwebtoken');
const util = require('util')
const verify = util.promisify(checkJwt.verify) // 解密
import tokenConfig from '../config/token.config'
const {secret} = tokenConfig
//检查token是否过期
module.exports = async (token:any) =>{
  if (token) {
	let payload
	try{
	  payload = await verify(token, secret)  // // 解密，获取payload
	  console.log(payload,"payload")
	}catch (err){
	  return false
	}
	return true
  } else {
	return false;
  }
};
