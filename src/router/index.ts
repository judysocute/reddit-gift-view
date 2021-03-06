import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import GiftPage from '@/components/gift/GiftPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/gift/:slug',
    name: 'gift',
    component: GiftPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
