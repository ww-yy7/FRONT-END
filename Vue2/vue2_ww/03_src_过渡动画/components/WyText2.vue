<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition  name="ff" appear>
        <h2 v-show="isShow" >你好啊！</h2>
    </transition>
  </div>
</template>

<script>
export default{
    name:'WyText',
    data(){
        return{
            isShow:true
        }
    },
}
</script>

<style scoped>
h2 {
  background-color: orange;
}

/* 进入的起点，离开的终点 */
.ff-enter,.ff-leave-to{
    transform: translateX(-100%);
}
/* 缓动的效果 */
.ff-enter-active,.ff-leave-active{
    transition: 0.5s linear;
}
/* 进入的终点，离开的起点 */
.ff-enter-to,.ff-leave{
    transform: translateX(0);
}

</style>
