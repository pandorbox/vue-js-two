/**
 * 账号
 */
import ParamUtils from "../base/ParamUtils";
export default class Account {
  /** 登录 */
  login(param) {
    return {
      name: "登录",
      method: "POST",
      url: "demo/login",
      param: ParamUtils.format(param)
    };
  }
  /** 注册 */
  register(param) {
    return {
      name: "注册",
      method: "POST",
      url: "demo/registe",
      param: ParamUtils.format(param)
    };
  }
}
