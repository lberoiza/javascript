import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Components
import Home from './pages/PageHome.vue';
import Blog from './pages/PageBlog.vue';
import PageSearch from './pages/PageSearch.vue';
import Form from './pages/PageForm.vue';
import Page1 from './pages/Page1.vue';
import Page2 from './pages/Page2.vue'
import PageNotFound from './pages/PageNotFound.vue'

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
    path: '/blog',
    component: Blog
  },
  {
    path: '/form',
    component: Form
  },
  {
    path: '/page1',
    component: Page1
  },
  {
    path: '/page2/:msg?',
    name: 'pag',
    component: Page2
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  },
  {
    path:'/search/:searchStr',
    component: PageSearch
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;