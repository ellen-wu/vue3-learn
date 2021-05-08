<template>
    <h2>My article!</h2>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { watch, ref } from 'vue';

export default {
  name: "MyArticle",
  setup() {
    const route = useRoute();
    const router = useRouter();

    console.log(route.query.name + route.query.keyword);
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
