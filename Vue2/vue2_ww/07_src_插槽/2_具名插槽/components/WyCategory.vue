<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义一个插槽 -->
    <slot name="center">wwwwwwww</slot>
    <slot name="next">wwwwwwww</slot>
  </div>
</template>

<script>
export default {
  name: "WyCategory",
  props: ["title"],
};
</script>

<style>
.category {
  background-color: pink;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: skyblue;
}
</style>
