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

.ff-enter-active{
    animation: ww 1s linear;
}   
.ff-leave-active {
    animation: ww 1s  linear reverse;
}
@keyframes ww {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>
