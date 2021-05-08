<template>
    <h2>Vuex Api useStore</h2>
  <h3>num1: {{ $store.state.num1 }}</h3>
  <h3>num1 getter: {{ $store.getters.double }}</h3>

  <button @click="cnum1(33)">修改num1: {{ $store.state.num1 }}</button>

  <button @click="cnum2()">修改num1 action: {{ $store.state.num1 }}</button>


  <h3>num2: {{ num2 }}</h3>
  <h3>num2 getter: {{ double2 }}</h3>

  <button @click="cnum3(33)">修改num2: {{ num2 }}</button>

  <button @click="cnum4()">修改num2 action: {{ num2 }}</button>

</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'VueApi',
  setup() {
    const store = useStore();

    function cnum3(newNum) {
      store.state.num2 = newNum;
    };

    function cnum4() {
      store.dispatch('timecum2', 66);
    };

    return {
      num2: computed(() => store.state.num2),
      double2: computed(() => store.getters.double2),
      cnum3,
      cnum4,
    };
  },
  methods: {
    cnum1(newNum) {
      this.$store.commit('changeNum1', newNum);
    },
    cnum2() {
      this.$store.dispatch('timecum1', 55);
    },
  },
};
</script>

<style scoped>

</style>
