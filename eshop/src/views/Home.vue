<template>
  <div class="home">
    {{ banners }}
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import { getHomeAllData, getHomeBanner } from 'network/home';

export default {
  name: 'Home',
  setup() {
    let banners = ref([]);

    onMounted(() => {
      getHomeAllData().then(res => {
        banners.value = res.slides;
      }).catch(err => {

      });
    });

    return {
      banners,
    };
  },
  components: {
  },
};
</script>

<style>
  #demo {
    background: url("~assets/images/3.png") no-repeat;
    width: 100px;
    height: 100px;
  }
</style>
