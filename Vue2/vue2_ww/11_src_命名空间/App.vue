<template>
  <div >
    <WyCount/>
    <hr>
    <WyPerson/>
  </div>
</template>

<script>
//引入组件
import WyCount from "./components/WyCount";
import WyPerson from "./components/WyPerson";

export default {
  name: "App",
  components: { WyCount,WyPerson },
};
</script>

<style>

</style>
