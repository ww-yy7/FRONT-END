<template>
    <div>
        <MyStudent name="ff" sex="男" :age="18" />
        <hr>

    </div>
</template>

<script>
//引入组件
import MyStudent from './components/MyStudent.vue'
export default {
    name: 'App',
    components: { MyStudent },

}
</script>

<style lang="scss" scoped></style>