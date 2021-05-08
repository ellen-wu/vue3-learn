<template>
  <div class="hello">
    <h3>在子组件helloworld中应用home组件的</h3>
    {{ count }}

    <p>{{ $store.state.num }}</p>

    <p>DNUM: {{ $store.state.dnum }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    count: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
