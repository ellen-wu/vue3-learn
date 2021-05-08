<template>
  <div class="about">
    <h3>{{ data.count }}</h3>
    <h3>{{ data.double }}</h3>

    <button @click="add">增加</button>
  </div>
</template>
<script>
import { reactive, computed } from 'vue';

export default {
  setup() {
    const data = reactive({
      count: 0,
      // eslint-disable-next-line no-unused-expressions,no-undef
      double: computed(() => data.count * 2),
    });

    function add() {
      return data.count++;
    };

    return { data, add };
  },
};
</script>
