const checkJwt = require('jsonwebtoken');
const util = require('util')
const verify = util.promisify(checkJwt.verify) // 解密
import tokenConfig from '../config/token.config'
const {secret} = tokenConfig
//检查token是否过期

interface DecodedToken {
	userId: number;
	userName: string;
	phone:String;
	userType: number;
	iat: number;
	exp: number;
  }
  
  async function decodeToken(token: string):  Promise<DecodedToken | null> {
	try {
	  const decoded = await checkJwt.verify(token, secret) as DecodedToken; // 解码并验证JWT token
	  return decoded; // 返回解码后的JWT token
	} catch (err) {
	  console.error(err);
	  return null;
	}
  }

  export default decodeToken;