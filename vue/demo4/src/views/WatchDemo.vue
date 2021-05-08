<template>
  <div>
    <h2>侦听器watch() api</h2>

    <button @click="a++">a={{ a }}</button>
    <button @click="b++">b={{ b }}</button>
  </div>
</template>

<script>
import { ref, watch, watchEffect, reactive, toRefs } from 'vue';

export default {
  name: 'WatchDemo',
  setup() {
    const user = reactive({
      a: 1,
      b: 2,
    });

    watch(user, () => {
      console.log('###');
    });

    // watchEffect(() => {
    //   console.log(user.a + '----');
    // });

    return {
      ...toRefs(user),
    };
  },

  /*setup() {
    let a = ref(1);
    let b = ref(2);

    // watch(() => {
    //   console.log(a.value + '----');
    // });
    //
    // watchEffect(() => {
    //   console.log(a.value + '####' + b.value);
    // });

    // 只监听a的变化 第三个参数设置初始化就监听
    watch(a, (newA, oldA) => {
      console.log(newA + '-----' + oldA);
    }, {immediate: true});

    // 监听多个参数的变化
    watch([a, b], ([newA, newB], [oldA, oldB]) => {
      console.log(newA + '----' + oldA);
      console.log(newB + '----' + oldB);
    }, {immediate: true});

    return {
      a,
      b,
    };
  },*/
};
</script>

<style scoped>

</style>
