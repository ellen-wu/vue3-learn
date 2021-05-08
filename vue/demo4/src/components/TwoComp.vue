<template>
  <hr>
  <h2>这是第二层组件</h2>
  <three-comp></three-comp>
</template>

<script>
  import ThreeComp from "./ThreeComp";
    export default {
        name: "TwoComp",
      components: {
          ThreeComp,
      }
    }
</script>

<style scoped>

</style>
