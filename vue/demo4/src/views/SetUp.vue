<template>
  这是setup组件
  <SubComp one="111" two="222" desc="desc" @myadd="add">
    <h2>hahaha</h2>
  </SubComp>
</template>

<script>
import SubComp from '../components/SubComp.vue';

export default {
  name: 'SetUp',
  components: {
    SubComp,
  },
  methods: {
    add(str) {
      console.log(str);
    },
  },
};
</script>

<style scoped>

</style>
