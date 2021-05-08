<template>
  <div>
    <div id="menu">
      <h5 v-for="item in pages">
        <router-link :to="'/router/page/' + item.id">{{ item.title }}</router-link>
      </h5>

      <hr>
      <h5>
        <router-link :to="{ path: '/router/article', query: { name: 'abc', keyword: 'hello' } }">文章一</router-link>
      </h5>
      <h5>
        <button @click="$router.push({ path: '/router/article', query: { name: 'abc', keyword: 'world' } })">文章二</button>
      </h5>

    </div>

    <div id="content">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  name: 'RouterApi',
  data() {
    return {
      pages: [
        { id: 1, title: 'title1' },
        { id: 2, title: 'title2' },
        { id: 3, title: 'title3' },
      ],
    };
  },
};
</script>

<style scoped>
  #menu {
    width: 30%;
    height: 300px;
    background: #f0f0f0;
    float: left;
  }

  #content {
    width: 70%;
    height: 300px;
    background: #cccccc;
    float: right;
  }
</style>
