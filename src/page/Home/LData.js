import BaseData, { BParam, BData } from "../../core/base/BaseData";
import Call from "../../core/request/Request";
import Api from "../../core/api/index";

export class Data extends BData {
  constructor() {
    super();
  }
}
export class Param extends BParam {
  constructor() {
    super();
  }
}
/**
 * 获取初始数据
 */
export default class LData extends BaseData {
  data = new Data();
  param = new Param();
  constructor() {
    super();
  }
  async getBaseData() {
    let res = await this.call.request(this.api.Kecheng.getNoticList());
    console.log("res:", res);
  }
}
