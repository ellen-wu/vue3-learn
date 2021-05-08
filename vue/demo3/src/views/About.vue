<template>
  <div class="about">
    <h2>user模块中得name</h2>
    <h2>{{ $store.state.user.name }}</h2>

    <h2>
      <button @click="cname">改名字</button>
    </h2>
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>

    <h2>
      <button @click="cname2">改名字2</button>
    </h2>

    <h1>vuex 全局状态</h1>
    <p>{{ $store.state.num }}</p>

    <button @click="cnum">Actions</button>
    <button @click="cnum2">Actions2</button>
    <h2>DNUM: {{ $store.state.dnum }}</h2>

    <h2>购物车总价：{{ $store.getters.totalPrice }}</h2>
    <h2>购物车内商品的价格大于30的总价：{{ $store.getters.goodsPriceGt30 }}</h2>

    <h2>参数传递: {{ $store.getters.goodsSelf(30) }}</h2>
  </div>
</template>

<script>
export default {
  methods: {
    cnum() {
      this.$store.dispatch('demo');
    },
    cnum2() {
      this.$store.dispatch('demo2', { count: 89, num: 9 });
    },
    // 会查找所有，无需指定模块，不同模块不要使用相同的名字
    cname() {
      this.$store.commit('setname', { name: 'lisi' });
    },
    cname2() {
      this.$store.dispatch('dosome', { name: 'wangwu' });
    },
  },
};
</script>
