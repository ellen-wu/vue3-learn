import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vant/lib/index.css';
import { Swipe, SwipeItem, Lazyload, Badge, Sidebar, SidebarItem, Collapse, CollapseItem, Tab,
  Tabs, Card, Image as VanImage, Form, Field, Button,   } from 'vant';


createApp(App)
  .use(Swipe).use(SwipeItem).use(Lazyload, { loading: require('./assets/images/default.png') })
  .use(Badge).use(Sidebar).use(SidebarItem).use(Collapse).use(CollapseItem).use(Tab).use(Tabs)
  .use(Card).use(VanImage).use(Form).use(Field).use(Button)
  .use(store)
  .use(router)
  .mount('#app');
