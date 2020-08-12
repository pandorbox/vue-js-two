import Kecheng from "./kecheng";
import Account from "./account";
/**
 * api
 */
export default class Index {
  /** 课程 */
  Kecheng;
  /** 登录 */
  Account;
  constructor() {
    this.Kecheng = new Kecheng();
    this.Account = new Account();
  }
}
