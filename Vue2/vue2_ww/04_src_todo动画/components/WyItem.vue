<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)" />
      <span v-show='!todo.isEdit'>{{ todo.title }}</span>
      <input 
      type="text"
      v-show='todo.isEdit'        
       :value="todo.title" 
       @blur="handleBlur(todo,$event)"
       ref="inputTitle"/>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button v-show='!todo.isEdit' class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "WyItem",
  //声明接收对象
  props: ["todo"],
  methods: {
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      this.$bus.$emit('checkTodo',id)
    },
    //删除操作
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        // this.deleteTodo(id)
        pubsub.publish("deleteTodo", id);
      }
    },
    //编辑操作
    handleEdit(todo) {
        if(todo.hasOwnProperty.call(todo,'isEdit')){
            todo.isEdit = true;
        }else{
            this.$set(todo,'isEdit',true)
        }
        this.$nextTick(function () {
            this.$refs.inputTitle.focus()            
        })
    },
    //失去焦点回调（真正执行修改逻辑）
    handleBlur(todo,e){
        todo.isEdit = false
        if(!e.target.value.trim()) return alert('输入不能为空')
        this.$bus.$emit('updateTodo', todo.id, e.target.value)
    }
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 2.25rem;
  line-height: 2.25rem;
  padding: 0 .3125rem;
  border-bottom: .0625rem solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: .375rem;
  position: relative;
  top: -0.0625rem;
}

li button {
  float: right;
  display: none;
  margin-top: .1875rem;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
