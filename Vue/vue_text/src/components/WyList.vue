<template>
    <ul class="todo-main">
        <WyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
    </ul>
</template>

<script>
import WyItem from './WyItem'
export default {
    name: 'WyList',
    components: { WyItem },
    data() {
        return {
            todos: [
                { id: '001', title: '写作业', done: true },
                { id: '002', title: '喝水', done: false },
                { id: '003', title: '背单词', done: true }
            ]

        }

    }
}
</script>

<style scoped>
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>