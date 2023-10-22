<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
import { mixin } from '../maxin'
//组件交互相关的代码（数据、方法等）
export default {
  name: 'MyStudent',
  data() {
    return {
      name: 'ff',
      age: 18,
    };
  },
  mixins: [mixin]
};
</script>

<style>
/* 组件的样式 */
.student {
  background-color: #fff;
}
</style>
