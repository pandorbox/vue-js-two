<template>
  <div class="home">
    <div class="nav">
      <div @click="emit($event,'onHome')">主页</div>
      <div>{{data.bool}}</div>
      <div @click="emit($event,'onMe')">我的</div>
    </div>
    <div class="tab">
      <div @click="emit($event,'onTurnOne')">tab页one</div>
      <div @click="emit($event,'onTurnTwo')">tab页two</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { Vue, Component, Mixins } from "vue-property-decorator";
import Logic from "./Logic";
import BaseVue from "@/core/base/BaseVue";

@Component({})
export default class Index extends Mixins(BaseVue) {
  logic = new Logic();
  data = this.logic.data;
  // async created() {
  //   this.logic.Vm = this;
  //   await this.logic.created();
  // }
  // async mounted() {
  //   await this.logic.mounted();
  // }
}
</script>

<style lang="css" scoped>
.nav {
  display: flex;
  justify-content: space-around;
}
.tab {
  display: flex;
  justify-content: space-around;
}
</style>
