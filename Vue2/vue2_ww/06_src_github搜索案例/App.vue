<template>
    <div class="container">
      <WySearch />
      <WyList />
    </div>
</template>

<script>
//引入组件
import WySearch from './components/WySearch.vue';
import WyList from './components/WyList.vue';


export default {
  name: "App",
  components:{WySearch,WyList}
};
</script>


