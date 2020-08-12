<template>
  <div class="home">Home Two</div>
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

<style></style>
