import Vue from "vue";
import Router from "vue-router";
import Home from "@/page/Home/Index";
import HomeOne from "@/page/HomeOne/Index";
import HomeTwo from "@/page/HomeTwo/Index";

import Me from "@/page/Me/Index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: "/index",
      component: Home,
      children: [
        {
          path: "index",
          name: "HomeOne",
          component: HomeOne
        },
        {
          path: "turn",
          name: "HomeTwo",
          component: HomeTwo
        }
      ]
    },
    {
      path: "/me",
      name: "Me",
      component: Me
    }
  ]
});
