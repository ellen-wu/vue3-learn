<template>
    <div>

      <nav-bar>
        <template v-slot:default>商品分类</template>
      </nav-bar>

      <div id="mainbox">
        <div class="ordertab">
          <van-tabs v-model="active" @click="tabClick">
            <van-tab title="销量排序"></van-tab>
            <van-tab title="价格排序"></van-tab>
            <van-tab title="评论排序"></van-tab>
          </van-tabs>
        </div>

        <van-sidebar class="leftmenu" v-model="activeKey">
          <van-collapse v-model="activeNames">
            <van-collapse-item  v-for="(item, index) in categories" :key="item.id" :title="item.name" :name="item.name">

                <van-sidebar-item v-for="sub in item.children" :title="sub.name" :key="sub.id" @click="getGoods(sub.id)" />
            </van-collapse-item>
          </van-collapse>
        </van-sidebar>

        <div class="goodslist">
          <div class="content">
            <van-card v-for="item in showGoods" :key="item.id"
              :num="item.comments_count"
              :tag="item.comments_count > 0 ? '流行' : '标签'"
              :price="item.price"
              :desc="item.updated_at"
              :title="item.title"
              :thumb="item.cover_url"
              :lazy-load="true"
              origin-price="10.00"
              @click="itemClick(item.id)"
            />
          </div>
        </div>
      </div>

      <back-top v-show="isShowBackTop" @bTop="bTop"></back-top>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {ref, reactive, onMounted, computed, watchEffect, nextTick} from 'vue';
  import { getCategory, getCategoryGoods } from 'network/category'
  import BetterScroll from "better-scroll";
  import BackTop from 'components/common/backtop/BackTop';
  import { useRouter } from 'vue-router'

    export default {
      name: "Category",
      setup() {
        let activeKey = ref(0);
        let categories = ref([]);
        let activeNames = ref([]);
        let active = ref(0);
        // 当前的排序条件
        let currentOrder = ref('sales');
        // 当前分类id
        let currentCid = ref(0);


        let isShowBackTop = ref(false);

        const router = useRouter();

        // 数据模型
        const goods = reactive({
          sales: {page: 1, list: []},
          price: {page: 1, list: []},
          comments_count: {page: 1, list: []},
        });

        const showGoods = computed(() => {
          return goods[currentOrder.value].list;
        });

        const init =  () => {
          getCategoryGoods('sales', currentCid.value).then(res => {
            goods.sales.list= res.goods.data;
          });
          getCategoryGoods('price', currentCid.value).then(res => {
            goods.price.list = res.goods.data;
          });
          getCategoryGoods('comments_count', currentCid.value).then(res => {
            goods.comments_count.list = res.goods.data;
          });
        };


        let betterScroll;

        onMounted(() => {
          getCategory().then(res => {
            //console.log(res)
            categories.value = res.categories;
          });

          getCategoryGoods('sales', currentCid.value).then(res => {
            goods.sales.list= res.goods.data;
          });

          // 创建betterscroll对象
          betterScroll = new BetterScroll(document.querySelector('.goodslist'), {
            probeType: 3, // 0, 1, 2, 3 只要在运动就触发
            click: true, // 是否允许点击
            pullUpLoad: true, // 上拉加载更多，默认false
          });

          betterScroll.on('pullingUp', () => {
            //console.log('触发');
            const page = goods[currentOrder.value].page + 1;

            getCategoryGoods(currentOrder.value, currentCid.value, page).then(res => {
              goods[currentOrder.value].list.push(...res.goods.data);
              goods[currentOrder.value].page += 1;
            });
            // 完成上拉，等数据请求完成，把数据展示出来
            betterScroll.finishPullUp();
            // 重新计算高度
            betterScroll.refresh();
          });

          // 触发滚动条件
          betterScroll.on('scroll', (position) => {
            isShowBackTop.value = (-position.y) > 300;
          });

        });


        // 监听 任何一个变量有变化
        watchEffect(() => {
          nextTick(() => {
            // 重新计算高度
            betterScroll && betterScroll.refresh();
          });
        });

        // 排序选项卡
        const tabClick = (index) => {
          let orders = ['sales', 'price', 'comments_count'];

          currentOrder.value = orders[index];

          getCategoryGoods(currentOrder.value, currentCid.value).then(res => {
            goods[currentOrder.value].list = res.goods.data;

            nextTick(() => {
              // 重新计算高度
              betterScroll && betterScroll.refresh();
            });
          });

          console.log("排序的序号：" + orders[index]);
        };

        // 通过分类获取商品
        const getGoods = (cid) => {
          currentCid.value = cid;
          init();
          console.log(cid);
        };


        const bTop = () => {
          betterScroll.scrollTo(0, 0, 500);
        };

        return {
          activeKey,
          categories,
          activeNames,
          active,
          tabClick,
          currentOrder,
          getGoods,
          currentCid,
          goods,
          showGoods,
          isShowBackTop,
          bTop,
          itemClick: (id) => {
            router.push({path: '/detail', query: {id}});
          },
        };
      },
      components: {
        NavBar,
        BackTop,
      },
    }
</script>

<style scoped lang="scss">
  #mainbox {
    margin-top: 45px;
    display: flex;
    .ordertab {
      flex: 1;
      /*background: red;*/
      /*width: 100%;*/
      /*height: 50px;*/
      z-index: 9;
      position: fixed;
      top: 45px;
      right: 0;
      left: 130px;
    }

    .leftmenu {
      /*background: green;*/
      width: 130px;
      position: fixed;
      top: 95px;
    }

    .goodslist {
      flex: 1;
      /*background: blue;*/
      height: 100vh;
      position: absolute;
      top: 100px;
      left: 130px;
      right: 0;
      padding: 10px;
      text-align: left !important;
      .content {
        padding-top: 10px;
      }
    }
  }

  .van-card__thumb {
    width: 68px !important;
  }
</style>

