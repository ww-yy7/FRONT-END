<template>
  <div class="container">
    <WyCategory title="美食">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fa59bd4fa-c058-4748-8b73-77aed990f9ac%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707912524&t=297d7ec547323a21797a48eda35f298d"
        alt="" />
    </WyCategory>
    <WyCategory title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </WyCategory>
    <WyCategory title="电影">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fa59bd4fa-c058-4748-8b73-77aed990f9ac%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707912524&t=297d7ec547323a21797a48eda35f298d"
        alt="" />
    </WyCategory>
  </div>
</template>

<script>
//引入组件
import WyCategory from "./components/WyCategory";
export default {
  name: "App",
  components: { WyCategory },
  data() {
    return {
      food: ["火锅", "烧烤"],
      games: ["原神"],
      films: ["《教父》"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
img{
  width: 100%;
}
</style>
