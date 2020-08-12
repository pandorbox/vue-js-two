// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.use(VueRouter, VueAxios, axios);
Vue.prototype.$http = axios;
//要求axios每次必须携带cookie去服务端
axios.defaults.withCredentials = true;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
