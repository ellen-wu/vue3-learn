<template>
  <hr>
    <h3>这是第三层组件</h3>
  {{title}}
  <input type="text" v-model="title">
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'ThreeComp',
  setup() {
    let title = inject('title');
    return {
      title,
    };
  },
  /*inject: ['title'],*/
};
</script>

<style scoped>

</style>
