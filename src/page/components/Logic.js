import LData from "./LData";
import BaseLogic, { Data as BaseData } from "@qjk/vue-core/src/core/base/BaseLogic";

export class Data extends BaseData {
  constructor() {
    super();
  }
}
export default class Logic extends BaseLogic {
  data = new Data();
  Ldata = new LData();
  constructor() {
    super();
  }
  async created(options) {}
  async mounted() {
    await this.Ldata.getBaseData();
  }
}
