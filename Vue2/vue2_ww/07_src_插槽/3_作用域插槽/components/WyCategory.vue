<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽 -->
    <slot :food="food">wwwwwwww</slot>
  </div>
</template>

<script>
export default {
  name: "WyCategory",
  props: ["title"],
  data() {
    return {
      food: ["火锅", "烧烤"],
    };
  },
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
