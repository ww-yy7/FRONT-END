<template>
  <div class="container">
    <WyCategory title="美食">
      <template slot-scope={food}>
        <ul>
          <li v-for="(g, index) in food" :key="index">{{ g }}</li>
        </ul>
      </template>
    </WyCategory>
    <WyCategory title="美食">
      <template slot-scope={food}>
        <ol>
          <li v-for="(g, index) in food" :key="index">{{ g }}</li>
        </ol>
      </template>
    </WyCategory>
    <WyCategory title="美食">
      <template slot-scope={food}>
        <h4 v-for="(g, index) in food" :key="index">{{ g }}</h4>
      </template>
    </WyCategory>
  </div>
</template>

<script>
//引入组件
import WyCategory from "./components/WyCategory";
export default {
  name: "App",
  components: { WyCategory },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
</style>
