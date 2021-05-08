import { createStore } from 'vuex';

export default createStore({
  state: {
    num1: 11,
    num2: 22,
  },
  getters: {
    double(state) {
      return state.num1 * 2;
    },
    double2(state) {
      return state.num2 * 2;
    },
  },
  mutations: {
    changeNum1(state, payload) {
      state.num1 = payload;
    },
    changeNum2(state, payload) {
      state.num2 = payload;
    },
  },
  actions: {
    timecum1({commit, state}, newNum) {
      setTimeout(() => {
        commit('changeNum1', newNum);
      }, 1000);
    },
    timecum2({commit, state}, newNum) {
      setTimeout(() => {
        commit('changeNum2', newNum);
      }, 1000);
    },
  },
  modules: {
  },
});
