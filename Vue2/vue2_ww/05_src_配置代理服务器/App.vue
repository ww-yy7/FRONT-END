<template>
  <div>
    <button @click="getStudents">点击获取学生信息</button>
    <button @click="getCars">点击获取汽车信息</button>
  </div>
</template>

<script>
//引入组件
import axios from "axios";

export default {
  name: "App",

  methods: {
    getStudents() {
      axios.get("http://localhost:8080/ww/students").then(
        (response) => {
          console.log("请求成功", response.data);
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/ff/cars").then(
        (response) => {
          console.log("请求成功", response.data);
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
  },
};
</script>
