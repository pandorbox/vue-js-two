import BaseData, { BParam, BData } from "@qjk/vue-core/src/core/base/BaseData";

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
    let res = await this.call.request(this.api);
    console.log("res:", res);
    return res;
  }
}
