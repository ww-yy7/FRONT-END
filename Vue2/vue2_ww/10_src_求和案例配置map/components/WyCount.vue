<template>
  <div>
    <h1>当前求和为{{ sum }}</h1>
    <h3>当前10倍求和为{{ bigSum }}</h3>
    <h3>学校的名字是{{ school }},学生的名字是{{ student }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数就加</button>
    <button @click="incrementWait(n)">缓一缓再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "WyCount",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    //手写的方法
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    //借助mapMutations生成计算属性,对象形式
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    //借助mapMutations生成计算属性,数组形式
    // ...mapMutations(['JIA','JIAN']),

    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },
    //借助mapActions生成计算属性,对象形式
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
    //借助mapActions生成计算属性,数组形式
    // ...mapActions(['jiaOdd','jiaWait'])

  },
  computed: {
    //自己写计算属性
    // sum(){
    //   return this.$store.state.sum
    // },
    // school(){
    //   return this.$store.state.school
    // },
    // student(){
    //   return this.$store.state.student
    // },
    //借助mapState生成计算属性，sum,school,subject（对象写法）
    // ...mapState({ sum: "sum", school: "school", student: "student" }),
    //借助mapState生成计算属性，sum,school,subject（数组写法），此时名称一定要一样
    ...mapState(["sum", "school", "student"]),
    // ******************************************************

    ...mapGetters({ bigSum: "bigSum" }),
    // ...mapGetters(['bigSum'])

    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
  },
};
</script>

<style>
button {
  margin-left: 0.3125rem;
}
</style>
