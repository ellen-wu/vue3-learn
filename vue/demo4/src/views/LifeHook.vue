<template>
  <h2>生命周期</h2>
</template>

<script>
import { onMounted, onUpdated } from 'vue';

export default {
  name: 'LifeHook',
  setup() {
    console.log('setup() ....');

    onMounted(() => {
      console.log('onmounted...');
    });
    // 其他的是类似的
    onUpdated(() => {
      console.log('onupdated --');
    });
  },
  beforeCreate() {
    console.log('beforeCreate() ---');
  },
  created() {
    console.log('create() ....');
  },
  mounted() {
    console.log('mounted ....');
  },
};
</script>

<style scoped>

</style>
