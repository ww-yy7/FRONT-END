<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <MySchool></MySchool>
    </div>
</template>

<script>
//引入组件
import MySchool from './components/MySchool.vue'
export default {
    name: 'App',
    components: {
        MySchool,
    }

}
</script>

<style></style>