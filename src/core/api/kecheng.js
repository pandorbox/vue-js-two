/**
 * 课程
 */
import ParamUtils from "../base/ParamUtils";
export default class Kecheng {
  /** 默认列表 */
  deafultList(param) {
    return {
      name: "默认列表",
      method: "GET",
      url: "http://127.0.0.1:3000/defkclist",
      param: {}
    };
  }
  /** tab 切换列表 */
  tabCutList(param) {
    return {
      name: "tab列表",
      method: "POST",
      url: "http://127.0.0.1:3000/thiskclist",
      param: ParamUtils.format(param)
    };
  }
  /** 添加课程步骤一 */
  addKechengOne(param) {
    return {
      name: "添加课程步骤一",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/addkclistone",
      param: param
    };
  }
  /** 添加课程步骤二 */
  addKechengTwo(param) {
    return {
      name: "添加课程步骤二",
      method: "POST",
      url: "http://127.0.0.1:3000/demo/addkclist",
      param: param
    };
  }
  /** 获取通告 */
  getNoticList(param) {
    return {
      name: "获取通告",
      method: "GET",
      url: "http://127.0.0.1:3000/notic",
      param: {}
    };
  }
  /** 首页获取课程列表一 */
  indexGetClassListOne(param) {
    return {
      name: "首页获取课程列表一",
      method: "GET",
      url: "http://127.0.0.1:3000/kclistone",
      param: {}
    };
  }
  /** 首页获取课程列表二 */
  indexGetClassListTwo(param) {
    return {
      name: "首页获取课程列表二",
      method: "GET",
      url: "http://127.0.0.1:3000/kclisttwo",
      param: {}
    };
  }
  /** 首页获取课程列表三 */
  indexGetClassListThr(param) {
    return {
      name: "首页获取课程列表三",
      method: "GET",
      url: "http://127.0.0.1:3000/kclistthr",
      param: {}
    };
  }
  /** 首页获取课程列表四 */
  indexGetClassListFou(param) {
    return {
      name: "首页获取课程列表四",
      method: "GET",
      url: "http://127.0.0.1:3000/kclistfou",
      param: {}
    };
  }
}
