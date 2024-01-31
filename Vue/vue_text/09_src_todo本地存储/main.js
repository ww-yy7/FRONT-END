//该文件是整个项目的入口文件

//引入Vue
import { createApp } from "vue";
//引入App组件，他是所有组件的父组件
import App from "./App.vue";
createApp(App).mount("#app");
