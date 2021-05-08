<template>
  <div>
    <h2>计算属性</h2>
    firstname: <input type="text" v-model="firstname"><br>
    lastname: <input type="text" v-model="lastname"><br>

    {{ firstname + '.' + lastname }}<br>
    {{ fullname }}<br>

    age: <input type="text" v-model="age"><br>
    年龄是：{{ age }} {{ show }}

  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue';

export default {
  name: 'Computed',
  setup() {
    const user = reactive({
      firstname: 'qing',
      lastname: 'ellen',
      age: 22,
    });

    const fullname = computed(() => `${user.firstname}.${user.lastname}`);

    const show = computed(() => {
      if (user.age < 20) {
        return '还年轻';
      } else if (user.age < 40) {
        return '小年轻';
      } else {
        return '岁数不小了！';
      }
    });

    return {
      ...toRefs(user),
      fullname,
      show,
    };
  },
};
</script>

<style scoped>

</style>
