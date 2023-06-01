import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Components
import Home from './pages/Home.vue';
import MyComponent from './components/MyComponent.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/last-articles',
    component: Home
  },
  {
    path: '/my-component',
    component: MyComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;