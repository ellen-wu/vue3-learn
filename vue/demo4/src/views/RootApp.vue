<template>
  <h1>这是根组件（根）</h1>
  {{ title }}
  <input type="text" v-model="title">
  <two-comp></two-comp>
</template>

<script>
  import { ref, provide } from 'vue';
import TwoComp from "../components/TwoComp";
export default {
  name: 'RootApp',
  components: {
    TwoComp,
  },
  // data() {
  //   return {
  //     title: '这是根组件提供的数据',
  //   };
  // },
  setup() {
    let title = ref('这是根组件提供的数据2');

    provide('title', title);

    return {
      title,
    };
  },
  // provide: {
  //   title: 'abc',
  // },
  // provide() {
  //   return {
  //     title: this.title,
  //   };
  // },
};
</script>

<style scoped>

</style>
