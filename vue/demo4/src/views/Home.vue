<template>
  <div class="home">
    <h3>{{ count }}</h3>
    <h3>{{ double }}</h3>

    <button @click="add">增加</button>
  </div>
</template>

<script>

// 相当于option
export default {
  name: 'Home',
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    double() {
      return this.count * 2;
    },
  },
  methods: {
    add() {
      // eslint-disable-next-line no-plusplus
      this.count++;
    },
  },
  components: {
  },
};
</script>
