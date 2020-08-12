import Call from "../request/Request";
import Api from "../api/index";
/**
 * 参数
 */
export class BParam {
  id = null;
}
/**
 * 数据
 */
export class BData {
  items;
  constructor() {
    this.items = [];
  }
}
/**
 * 获取初始数据
 */
export default class BaseData {
  /** 数据 */
  data;
  /** 参数 */
  param;
  /** 请求 */
  call;
  /** api */
  api;
  constructor() {
    this.data = new BData();
    this.param = new BParam();
    this.call = new Call();
    this.api = new Api();
  }
  async getBaseData() {}
}
