import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';

// About 使用动态 import，实现按需编译（首次访问路由时才编译）
const About = () => import(
  /* webpackChunkName: "about" */
  '@/pages/About.vue'
);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;