import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },

  {
    path: '/setup',
    name: 'SetUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SetUp.vue'),
  },

  {
    path: '/comapi',
    name: 'ComApi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ComApi.vue'),
  },
  {
    path: '/computed',
    name: 'ComputedDemo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Computed.vue'),
  },
  {
    path: '/watch',
    name: 'WatchDemo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WatchDemo.vue'),
  },
  {
    path: '/lifehook',
    name: 'LifeHook',
    component: () => import(/* webpackChunkName: "about" */ '../views/LifeHook.vue'),
  },
  {
    path: '/proin',
    name: 'RootApp',
    component: () => import(/* webpackChunkName: "about" */ '../views/RootApp.vue'),
  },
  {
    path: '/router',
    name: 'RouterApi',
    component: () => import(/* webpackChunkName: "about" */ '../views/RouterApi.vue'),
    children: [
      {
        path: 'page',
        component: () => import(/* webpackChunkName: "about" */ '../views/MyPage.vue'),
      },
      {
        path: 'page/:id',
        component: () => import(/* webpackChunkName: "about" */ '../views/MyPage.vue'),
      },
      {
        path: 'article',
        component: () => import(/* webpackChunkName: "about" */ '../views/MyArticle.vue'),
      },
    ],
  },
  {
    path: '/vuexapi',
    name: 'VuexApi',
    component: () => import(/* webpackChunkName: "about" */ '../views/VueApi.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
