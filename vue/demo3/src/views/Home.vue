<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h2>这是在单页模板中应用</h2>
    <h2>{{ count }}</h2>
    <h2>计算属性：{{ myPow }}</h2>
    <button @click="count--">-</button>
    <button @click="count++">+</button>

    <hr>
    <h2>使用全局状态</h2>
    <h2>NUM: {{ $store.state.num }}</h2>
    <h2>DNUM: {{ $store.state.dnum }}</h2>
    <h2>state计算属性: {{ vuexPow }}</h2>
    <h2>使用getter计算属性: {{ $store.getters.vuexNum }}</h2>
    <button @click="$store.state.num--">-</button>
    <button @click="$store.state.num++">+</button>

    <h2>使用mutations修改全局状态</h2>
    <h2>{{ $store.state.dnum }}</h2>
    <button @click="sub1">-</button>
    <button @click="add1">+</button>

    <h2>使用mutations修改全局状态 带参数</h2>
    <h2>{{ $store.state.dnum }}</h2>
    <button @click="sub2">-</button>
    <button @click="add2">+</button>

    <h2>使用mutations修改全局状态 带多个参数</h2>
    <h2>{{ $store.state.dnum }}</h2>
    <button @click="sub3">-</button>
    <button @click="add3">+</button>
    <HelloWorld msg="Welcome to Your Vue.js App" :count="count"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      count: 0,
    };
  },
  components: {
    HelloWorld,
  },
  computed: {
    myPow() {
      return this.count * this.count;
    },
    vuexPow() {
      return this.$store.state.num * this.$store.state.num;
    },
  },
  methods: {
    add1() {
      this.$store.commit('add');
    },
    sub1() {
      this.$store.commit('sub');
    },
    add2() {
      const count = 2;
      this.$store.commit('add2', count);
    },
    sub2() {
      const count = 2;
      this.$store.commit('sub2', count);
    },
    // 多个参数使用对象或数组进行传递
    add3() {
      const payload = { count: 2, num: 1 };
      this.$store.commit('add3', payload);
    },
    sub3() {
      const payload = { count: 2, num: 1 };
      this.$store.commit({ type: 'sub3', payload });
    },
  },
};
</script>
