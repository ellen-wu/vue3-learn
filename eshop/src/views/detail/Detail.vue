<template>
    <div>
      <nav-bar>
        <template v-slot:default>商品详情: {{ id }}</template>
      </nav-bar>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { useRoute } from 'vue-router';
import { ref } from 'vue';

export default {
  name: "Detail",
  components: {
    NavBar,
  },
  setup() {
    const route = useRoute();
    let id = ref(0);

    id.value = route.query.id;

    return {
      id,
    };
  },
}
</script>

<style scoped>

</style>
