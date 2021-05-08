import { createStore } from 'vuex';

const user = {
  state: () => ({
    name: 'zhangsan',
    slogen: ' abc',
  }),
  getters: {
    fullname(state) {
      return state.name + state.slogen;
    },
    fullname2(state, getters, rootState) {
      return getters.fullname + rootState.num;
    },
  },
  mutations: {
    setname(state, payload) {
      state.name = payload.name;
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    dosome({ state, commit }, payload) {
      setTimeout(() => {
        commit('setname', payload);
      }, 2000);
    },
  },
};

export default createStore({
  state: {
    num: 0,
    dnum: 0,
    cartlist: [
      { name: 'vue.js', price: 20 },
      { name: 'vue.js', price: 30 },
      { name: 'vue.js', price: 50 },
      { name: 'vue.js', price: 60 },
    ],
  },
  getters: {
    // 第一个参数state
    vuexNum(state) {
      return state.num * state.num;
    },
    totalPrice(state) {
      return state.cartlist.reduce((s, n) => s + n.price, 0);
    },
    goodsPriceGt30(state) {
      return state.cartlist.filter((n) => n.price > 30).reduce((s, n) => s + n.price, 0);
    },
    goodsPriceGt30Two(state) {
      return state.cartlist.filter((n) => n.price > 30);
    },
    totalPrice2(state, getters) {
      return getters.goodsPriceGt30Two(state).reduce((s, n) => s + n.price, 0);
    },
    // 默认就2个参数
    // eslint-disable-next-line no-unused-vars
    goodsSelf(state, getters) {
      return function (price) {
        return state.cartlist.filter((n) => n.price > price);
      };
    },
  },
  mutations: {
    sub(state) {
      // eslint-disable-next-line no-plusplus
      state.dnum--;
    },
    add(state) {
      // eslint-disable-next-line no-plusplus
      state.dnum++;
    },

    sub2(state, count) {
      state.dnum -= count;
    },
    add2(state, count) {
      state.dnum += count;
    },

    sub3(state, p) {
      state.dnum -= (p.payload.count + p.payload.num);
    },
    add3(state, payload) {
      state.dnum += (payload.count + payload.num);
    },
    cnum(state) {
      state.num = 44;
    },
  },
  actions: {
    demo(context) {
      setTimeout(() => {
        // eslint-disable-next-line no-param-reassign
        // context.state.num = 99;
        context.commit('cnum');
      }, 300);
    },
    // eslint-disable-next-line no-unused-vars
    fun(context) {
      // const {state, commit} = context
    },

    demo2({ state, commit, getters }, payload) {
      setTimeout(() => {
        state.num = 9;
        commit('cnum');
        console.log(payload);
        console.log(getters);
      }, 300);
    },
  },
  modules: {
    user,
    article: {},
    cart: {},
    goods: {},
  },
});
