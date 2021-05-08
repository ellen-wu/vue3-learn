<template>
  <div>
    <h1>常用Api的应用</h1>
    原生的: {{ num }}<br>
    调用方法： {{ myFun() }}<br>

    ref的变量 {{ num2 }}<br>
    <!--{{ myFun2(33) }}<br>-->
    reactive中得对象: {{ user.name }} - {{ user.age }} - {{ user.gender }} <br>

    num2: <input type="text" v-model="num2"><br>
    user.name <input type="text" v-model="user.name"><br>
    user.age <input type="text" v-model="user.age"><br>

    {{ name }} -- {{ age }}<br>
    name <input type="text" v-model="name"><br>
    age <input type="text" v-model="age">
  </div>
</template>

<script>
import { ref, reactive, toRefs, readonly, isRef } from 'vue';

export default {
  name: 'ComApi',
  setup() {
    let num = 1;
    let myFun = () => {
      console.log(num);
    };

    // 响应式的声明
    let num2 = ref(2);
    let myFun2 = (newValue) => {
      console.log(num2.value);
      num2.value = newValue;
    };

    // 响应式声明对象
    let user = reactive({
      name: 'zhangsan',
      age: 22,
      gender: 'male',
    });

    // 不是响应式
    // let user2 = readonly(user);

    return {
      num,
      myFun,
      num2,
      myFun2,
      user,
      ...toRefs(user),
    };
  },
};
</script>

<style scoped>

</style>
