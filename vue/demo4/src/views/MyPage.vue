<template>
    <h1>My page</h1>
  <h3>{{ $route.params.id }}</h3>
  <h3>{{ pid }}</h3>
  <h2>id: {{ id }}</h2>
</template>

<script>
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import { watch, ref } from 'vue';

export default {
  name: "MyPage",
  setup() {
    const route = useRoute();
    const router = useRouter();

    let id = ref();
    watch(() => route.params, (newId) => {
      console.log(newId.id);
      id.value = newId.id;

      // 异步请求服务器API查找用户信息
    });

    onBeforeRouteLeave((to, from) => {
      let isOk = window.confirm(`你确定要从${from.fullPath}到${to.fullPath}`);
      if (!isOk) {
        return false;
      }
    });
    onBeforeRouteUpdate();

    setTimeout(() => {
      router.push({ path: '/router/article', query: { name: 'abc', keyword: 'world' } });
    }, 2000);

    return {
      id,
    };
  },
  computed: {
    pid() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped>

</style>
