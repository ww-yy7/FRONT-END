//引入Vue核心库
import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
//应用vuex插件
Vue.use(Vuex);
//计算相关的配置
const countAbount = {
  namespaced: true, //开启命名空间
  actions: {
    jiaOdd(context, value) {
      console.log("actions里的jiaOdd被调用了");
      if (context.state.sum % 2) {
        context.commit("JIA", value);
      }
    },
    jiaWait(context, value) {
      console.log("actions里的jiaWait被调用了");
      setTimeout(() => {
        context.commit("JIA", value);
      }, 1000);
    },
  },
  //准备mutations对象——修改state中的数据
  mutations: {
    JIA(state, value) {
      console.log("mutations中的JIA被调用了");
      state.sum += value;
    },
    JIAN(state, value) {
      console.log("mutations中的JIAN被调用了");
      state.sum -= value;
    },
  },
  //准备state对象——保存具体数据
  state: {
    sum: 0, //相加的和
    school: "ecust",
    student: "ww",
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};
//人员列表相关的配置
const personAbount = {
  namespaced: true, //开启命名空间
  actions: {
    addPersonWang(context,value){
      console.log("actions里的ddPersonWang被调用了");
      if (value.name.indexOf('王')===0){
        context.commit('ADD_PERSON',value);
      }
      else{
        alert('输入的名字必须姓王！！！')
      }
    }
  },
  mutations: {
    ADD_PERSON(state, value) {
      console.log("mutations中的ADD_PERSON被调用了");
      state.personList.unshift(value);
    },

  },
  state: {
    personList: [{ id: "001", name: "张三" }],
  },
  getters: {
    firstPersonName(state){
      return state.personList[0].name
    }
  },
};
//创建并暴露store
export default new Vuex.Store({
  modules: {
    countAbount,
    personAbount,
  },
});
