<template>
    <div>
        <h1 ref="msg" v-text="msg"></h1>
        <button ref='btn' @click="showDom">点我输出DOM元素</button>
        <MySchool></MySchool>
    </div>
</template>

<script>
//引入组件
import MySchool from './components/MySchool.vue'
export default {
    name: 'App',
    components: { MySchool },
    data() {
        return {
            msg: '你好呀,ww'
        }
    },
    methods: {
        showDom() {
            console.log(this.$refs);
            // console.log(this.$refs.btn);
            // console.log(this.$refs.msg);
        }
    },
}
</script>

<style lang="scss" scoped></style>