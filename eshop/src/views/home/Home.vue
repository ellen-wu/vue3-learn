<template>
  <div id="home">
    <nav-bar>
      <template v-slot:default>图书商城</template>
    </nav-bar>

    <tab-control v-show="isTabFixed" :titles="['畅销', '新书', '精选']" @tabClick="tabClick"></tab-control>

    <div class="wrapper">
      <div class="content">
        <div ref="bannerAndRecommend">
          <home-swiper :banners="banners"></home-swiper>
          <!--<div class="banners">
            <img src="~assets/images/1.png" alt="">
          </div>-->

          <recommend :recommends="recommends"></recommend>
        </div>

        <tab-control :titles="['畅销', '新书', '精选']" @tabClick="tabClick"></tab-control>

        <goods-list :goods="showGoods"></goods-list>
      </div>
    </div>

    <back-top v-show="isShowBackTop" @bTop="bTop"></back-top>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Recommend from "./ChildComps/Recommend";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import { getHomeAllData, getHomeGoods } from 'network/home';
import { onMounted, ref, reactive, computed, watchEffect, nextTick } from 'vue';
import BackTop from 'components/common/backtop/BackTop';
import HomeSwiper from "./ChildComps/HomeSwiper";

import BetterScroll from 'better-scroll';

export default {
  name: "Home",
  setup() {
    const recommends = ref([]);

    let isTabFixed = ref(false);
    let isShowBackTop = ref(false);

    let bannerAndRecommend = ref(null);

    // 商品列表数据模型
    const goods = reactive({
      sales: {page: 1, list: []},
      new: {page: 1, list: []},
      recommend: {page: 1, list: []},
    });

    let currentTab = ref('sales');

    const showGoods = computed(() => {
      return goods[currentTab.value].list;
    });

    let betterScroll;
    let banners = ref([]);
    onMounted(() => {
      getHomeAllData().then(res => {
        //console.log(res.goods);
        recommends.value = res.goods.data;
        banners.value = res.slides;
      });

      getHomeGoods('sales').then(res => {
        goods.sales.list = res.goods.data;
      });
      getHomeGoods('recommend').then(res => {
        goods.recommend.list = res.goods.data;
      });
      getHomeGoods('new').then(res => {
        goods.new.list = res.goods.data;
      });

      // 创建betterscroll对象
      betterScroll = new BetterScroll(document.querySelector('.wrapper'), {
        probeType: 3, // 0, 1, 2, 3 只要在运动就触发
        click: true, // 是否允许点击
        pullUpLoad: true, // 上拉加载更多，默认false
      });

      // 触发滚动条件
      betterScroll.on('scroll', (position) => {
        //console.log(position.y);
        //console.log(bannerAndRecommend.value.offsetHeight);
        isTabFixed.value = (-position.y) > bannerAndRecommend.value.offsetHeight;

        isShowBackTop.value = (-position.y) > bannerAndRecommend.value.offsetHeight;
      });

      betterScroll.on('pullingUp', () => {
        //console.log('触发');
        const page = goods[currentTab.value].page + 1;

        getHomeGoods(currentTab.value, page).then(res => {
          goods[currentTab.value].list.push(...res.goods.data);
          goods[currentTab.value].page += 1;
        });
        // 完成上拉，等数据请求完成，把数据展示出来
        betterScroll.finishPullUp();

        console.log('当前类型：' + currentTab.value + '，当前页：' + page);
        // 重新计算高度
        betterScroll.refresh();
      });

      // 监听 任何一个变量有变化
      watchEffect(() => {
        nextTick(() => {
          // 重新计算高度
          betterScroll && betterScroll.refresh();
        });
      });


    });

    console.log(goods);

    const tabClick = (index) => {
      let tabs = [
        'sales',
        'new',
        'recommend',
      ];
      currentTab.value = tabs[index];
      nextTick(() => {
        // 重新计算高度
        betterScroll && betterScroll.refresh();
      });
      //console.log(index);
    };

    const bTop = () => {
      betterScroll.scrollTo(0, 0, 500);
    };

    return {
      recommends,
      tabClick,
      goods,
      showGoods,
      isTabFixed,
      bannerAndRecommend,
      isShowBackTop,
      bTop,
      banners,
    };
  },
  components: {
    Recommend,
    NavBar,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
  },
}
</script>

<style scoped>
  .banners img {
    width: 100%;
    height: auto;
  }

  #home {
    height: 100vh;
    position: relative;
  }

  .wrapper {
    position: absolute;
    top: 45px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .content {

  }
</style>
