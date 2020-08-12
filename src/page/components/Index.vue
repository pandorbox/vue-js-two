<template>
  <div class="page"></div>
</template>

<script>
import { Vue, Component, Mixins } from "vue-property-decorator";
import Logic from "./Logic";
import BaseVue from "@qjk/vue-core/src/core/base/BaseVue";

@Component({})
export default class Index extends Mixins(BaseVue) {
  logic = new Logic();
  data = this.logic.data;
}
</script>

<style lang="css" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
