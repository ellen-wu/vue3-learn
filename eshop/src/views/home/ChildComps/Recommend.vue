<template>
    <div class="recommend-box">
      <div class="recommend-item" v-for="item in recommends.slice(0, 4)" :key="item.id">
        <a href="" @click.prevent="go2Detail(item.id)">
          <img v-lazy="item.cover_url" alt="">
          <div>{{ item.title }}</div>
        </a>
      </div>
      <!--<div class="recommend-item">
        <a href="">
          <img src="~assets/images/11.png" alt="">
          <div>Linux</div>
        </a>
      </div>
      <div class="recommend-item">
        <a href="">
          <img src="~assets/images/11.png" alt="">
          <div>Linux</div>
        </a>
      </div>
      <div class="recommend-item">
        <a href="">
          <img src="~assets/images/11.png" alt="">
          <div>Linux</div>
        </a>
      </div>-->
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: "Recommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    }
  },
  setup() {
    const router = useRouter();
    const go2Detail = (id) => {
      router.push({
        path: '/detail',
        query: {id},
      });
    };

    return {
      go2Detail,
    };
  },
}
</script>

<style scoped lang="scss">
  .recommend-box {
    width: 100%;
    display: flex;
    text-align: center;
    padding: 15px 0 30px 0;
    border-bottom: 8px solid #eeeeee;
    font-size: 12px;
  }
  .recommend-box .recommend-item {
    flex: 1;
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
</style>
