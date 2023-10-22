<template>
    <div>
        <h2 @click="showName">学校名称:{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
//引入一个组合
import { mixin } from '../maxin'
export default {
    data() {
        return {
            name: 'ecust',
            address: '梅陇路130号'
        }
    },
    mixins: [mixin]
}
</script>

<style lang="scss" scoped></style>