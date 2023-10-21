<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age + 1 }}</h2>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
  name: 'MyStudent',
  data() {
    return {
      msg: '我是ecust的学生',
    };
  },
  //简单声明接收
  // props: ['name', 'age', 'sex']

  //接收的同时对数据类型进行限制
  /*   props: {
      name: String,
      age: Number,
      sex: String
    } */
  //接收的同时对数据类型进行限制，默认值的指定和必要性的限制
  props: {
    name: {
      type: String,  //name的类型是字符串
      required: true  //name是必要的
    },
    age: {
      type: Number,
      default: 99 //默认值
    },
    sex: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
/* 组件的样式 */
.student {
  background-color: #fff;
}
</style>
