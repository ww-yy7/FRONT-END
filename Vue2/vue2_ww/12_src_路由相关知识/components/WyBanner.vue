<template>
  <div class="row">
    <div class="col-md-offset-2 col-md-8">
      <div class="page-header">
        <h1>Vue Router Demo</h1>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="go">测试一下go</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WyBanner",
  props: ["WyBanner"],
  methods:{
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    go(){
      this.$router.go(-1)

    }
  }
};
</script>
