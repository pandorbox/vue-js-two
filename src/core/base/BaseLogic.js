import BaseData from "./BaseData";

/**
 * data数据
 */
export class Data {
  items;
  constructor() {
    this.items = [];
  }
}
/**
 * 基础logic
 */
export default class BaseLogic {
  /**
   * 初始数据
   */
  data;
  /**
   * vue实例
   */
  Vm;
  /**
   * 网络数据
   */
  Ldata;
  constructor() {
    this.data = new Data();
    this.Ldata = new BaseData();
    this.Vm = {};
  }
  /**
   * vue周期--实例创建前
   */
  async beforeCreate() {}
  /**
   * vue周期--实例创建完成
   * @param options 路由参数
   */
  async created(options) {}
  /**
   * vue周期--实例挂载前
   */
  async beforeMount() {}
  /**
   * vue周期--实例挂载完成
   */
  async mounted() {}
  /**
   * 创建vue实例
   * @param vueLmple vue实例
   */
  async setVueLmple(vueLmple) {
    this.Vm = vueLmple;
  }
  /**
   * @param  name 路由名
   * @param params 参数
   */
  async routerTo(name, params) {
    if (!this.Vm) return;
    if (this.Vm.$route.name == name) return;
    this.Vm.$router.push({
      name: name,
      params: params
    });
  }
}
