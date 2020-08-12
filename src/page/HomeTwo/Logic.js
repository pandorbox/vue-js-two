import BaseLogic, { Data as BaseData } from "../../core/base/BaseLogic";
export class Data extends BaseData {
  bool;
  constructor() {
    super();
    this.bool = false;
  }
}
export default class Logic extends BaseLogic {
  data = new Data(); //始数据组
  constructor() {
    super();
  }
  async created() {
    this.data.bool = !this.data.bool;
  }
  async mounted() {
    this.data.bool = !this.data.bool;
  }
}
