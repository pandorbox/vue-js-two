import LData from "./LData";
import BaseLogic, { Data as BaseData } from "@/core/base/BaseLogic";

export class Data extends BaseData {
  bool;
  constructor() {
    super();
    this.bool = false;
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
  async onHome() {
    await this.routerTo("Home");
  }
  async onMe() {
    await this.routerTo("Me");
  }
  async onTurnOne() {
    await this.routerTo("HomeOne", { ID: 1 });
  }
  async onTurnTwo() {
    await this.routerTo("HomeTwo", { ID: 2 });
  }
}
