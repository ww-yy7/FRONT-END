<template>
  <div>
    <WyBanner/>
    <div class="row">
      <div class="col-md-2 col-md-offset-2">
        <div class="list-group">
          <!-- 原始html里面实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->
          <!-- 利用router-link 实现路由的切换-->
          <router-link class="list-group-item" active-class="active" to="/about" >About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home" >Home</router-link>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件
import WyBanner from './components/WyBanner'
export default {
  name: "App",
  components:{WyBanner}
};
</script>

<style></style>
