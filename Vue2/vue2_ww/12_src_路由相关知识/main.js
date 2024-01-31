//该文件是整个项目的入口文件
//引入Vue
import Vue from "vue";
//引入App组件，他是所有组件的父组件
import App from "./App.vue";

//引入VueRouter
import VueRouter from "vue-router";

import router from "./router";

//应用插件
Vue.use(VueRouter);

Vue.config.productionTip = false;
new Vue({
  el: "#app",
  render: (h) => h(App),
  router: router,
});
