<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition   
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__jello"
    leave-active-class="animate__backOutRight"
    >
        <h2 v-show="isShow" >你好啊！</h2>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
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

</style>
