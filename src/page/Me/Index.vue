<template>
  <div class="home" @click="emit($event,'onHome')">我的{{data}}</div>
</template>

<script>
import { Vue, Component, Mixins } from "vue-property-decorator";
import Logic from "./Logic";
import BaseVue from "@/core/base/BaseVue";
@Component({})
export default class Index extends Mixins(BaseVue) {
  logic = new Logic();
  data = this.logic.data;
}
</script>

<style></style>
