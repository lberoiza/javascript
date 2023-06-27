import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Components
import RedirectComponent from './components/RedirectComponent.vue';
import Home from './pages/PageHome.vue';
import Blog from './pages/PageBlog.vue';
import PageSearch from './pages/PageSearch.vue';
import Form from './pages/PageForm.vue';
import PageArticle from './pages/PageArticle.vue'
import Page1 from './pages/Page1.vue';
import Page2 from './pages/Page2.vue'
import PageNotFound from './pages/PageNotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'redirect',
    path: '/redirect/*',
    component: RedirectComponent
  },
  {
    name: 'pageIndex',
    path: '/',
    component: Home
  },
  {
    name: 'pageHome',
    path: '/home',
    component: Home
  },
  {
    name: 'pageLastArticles',
    path: '/last-articles',
    component: Home
  },
  {
    name: 'pageBlog',
    path: '/blog',
    component: Blog
  },
  {
    name: 'pageForm',
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
    name: 'pageSearch',
    path: '/search/:searchStr',
    component: PageSearch
  },
  {
    name: 'pageArticle',
    path: '/blog/article/:articleId',
    component: PageArticle
  },

  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;