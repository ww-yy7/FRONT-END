<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <Wyheader @addTodo="addTodo"/>
                <WyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
                <WyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
            </div>
        </div>
    </div>
</template>

<script>
//引入组件
import pubsub from 'pubsub-js'
import Wyheader from './components/Wyheader'
import WyList from './components/WyList'
import WyFooter from './components/WyFooter'

export default {
    name: 'App',
    components: { Wyheader, WyList, WyFooter },
    data() {
        return {
            todos:JSON.parse(localStorage.getItem('todos'))  || []
        }

    },
    methods: {
        //添加一个todo
        addTodo(todoObj) {
            this.todos.unshift(todoObj)
        },
        //勾选或者取消一个todo
        checkTodo(id) {
            this.todos.forEach((todo) => {
                if(todo.id===id) todo.done=!todo.done
            })
        },
        //删除一个todo
        deleteTodo(_,id) {
            this.todos=this.todos.filter(todo=> todo.id!== id )
        },
        //全选或者取消全选
        checkAllTodo(done){
            this.todos.forEach((todo)=>{
                todo.done=done
            })
        },
        //清除所有已经完成的todo
        clearAllTodo(){
            this.todos=this.todos.filter((todo)=>{
                return !todo.done
            })
        }
    },
    watch:{
        todos:{
            deep:true,
            handler(value){
               localStorage.setItem('todos',JSON.stringify(value))
        },
    }
    },
    mounted(){
        this.$bus.$on('checkTodo',this.checkTodo)
        this.pubId=pubsub.subscribe('deleteTodo',this.deleteTodo)
    },
    beforeDestroy() {
        this.$bus.$on('checkTodo')
        pubsub.unsubscribe(this.pubId)
    },
}
</script>

<style >
body {
    background: #fff;
}

.btn {
    /* 样式显示为行内块 */
    display: inline-block;
    padding: .25rem .75rem;
    margin-bottom: 0;
    font-size: .875rem;
    line-height: 1.25rem;
    text-align: center;
    /* 设置行内块元素的垂直对齐方式 */
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 .0625rem 0 rgba(255, 255, 255, 0.2), 0 .0625rem .125rem rgba(0, 0, 0, 0.05);
    border-radius: .25rem;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: .0625rem solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 37.5rem;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: .625rem;
    border: .0625rem solid #ddd;
    border-radius: .3125rem;
}</style>