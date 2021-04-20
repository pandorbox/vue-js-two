import { Vue, Component, Provide, Watch } from "vue-property-decorator";

/**
 * 基础Vue
 */
@Component({})
export default class BaseVue extends Vue {
  /** 数据 */
  data = {};
  /** 逻辑 */
  logic = {};
  constructor() {
    super();
  }
  onRefreshView(data) {
    if (!data) return;
    this.data = data;
    this.logic = {};
  }
  /**
   * 发送事件
   * @param event 参数
   * @param name 名称
   */
  async emit(event, name) {
    if (!this.logic || !name || !this.logic[name]) return;
    let e = event;
    // 兼容小程序
    // if (typeof window == "undefined" && e && e.mp && e.mp.detail && e.mp.detail["__args__"] && e.mp.detail["__args__"][0]) {
    //   e = e.mp.detail["__args__"][0];
    // }
    await this.logic[name](e);
  }
  /**
   * vue生命周期-创建前
   */
  async beforeCreate() {
    console.log("vue生命周期-创建前:");
  }
  /**
   * vue生命周期-创建完成
   */
  async created() {
    console.log("vue生命周期-创建完成:");
    await this.logic.setVueLmple(this);
    let options = this.$route.params;
    await this.logic.created(options);
  }
  /**
   * vue生命周期-挂载前
   */
  async beforeMount() {
    console.log("vue生命周期-挂载前:");
  }
  /**
   * vue生命周期-挂载完成
   */
  async mounted() {
    console.log("vue生命周期-挂载完成:");
    await this.logic.mounted();
  }
  /**
   * vue生命周期-销毁前
   */
  async beforeDestroy() {
    console.log("vue生命周期-销毁前:");
  }
  /**
   * vue生命周期-销毁后
   */
  async destroy() {
    console.log("vue生命周期-销毁前:");
  }
}
