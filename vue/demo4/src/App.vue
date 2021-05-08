<template>
  <div id="nav">
    <router-link to="/">原生</router-link> |
    <router-link to="/about">组合式api</router-link> |
    <router-link to="/setup">入口setup()</router-link> |
    <router-link to="/comapi">常用API</router-link> |
    <router-link to="/computed">计算属性</router-link> |
    <router-link to="/watch">侦听器</router-link> |
    <router-link to="/lifehook">生命周期</router-link> |
    <router-link to="/proin">provide/inject</router-link> |
    <router-link to="/router">路由api</router-link> |
    <router-link to="/vuexapi">Vuex api</router-link>




  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
