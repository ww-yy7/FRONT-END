<template>
    <div>
        <MyStudent name="ff" sex="男" :age="18" />
        888
        <hr>
        <MySchool></MySchool>

    </div>
</template>

<script>
//引入组件
import MyStudent from './components/MyStudent.vue'
import MySchool from './components/MySchool.vue'
export default {
    name: 'App',
    components: { MyStudent, MySchool },

}
</script>

<style lang="scss" scoped></style>