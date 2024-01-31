<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">count组件的求和是:{{ sum }}</h3>
    <h3>添加的名字是：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的名字</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "WyPerson",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personAbount.personList;
    },
    sum() {
      return this.$store.state.countAbount.sum;
    },
    firstPersonName(){
      return this.$store.getters['personAbount/firstPersonName']
    }
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("personAbount/ADD_PERSON", personObj);
      this.name = "";
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbount/addPersonWang", personObj);
      this.name = "";
    },
  },
};
</script>

<style></style>
