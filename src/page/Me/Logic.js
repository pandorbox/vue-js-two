import LData from "./LData";
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
    console.log(this.data.bool);
  }
  async mounted() {
    this.data.bool = !this.data.bool;
    console.log(this.Vm);
  }
  async onHome(e, vm) {
    this.data.bool = !this.data.bool;
    console.log(
      vm.$router.push({
        path: "/index"
      })
    );
  }
}
