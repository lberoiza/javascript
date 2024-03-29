import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@/pages/home/home.component')
      .then(chunk => chunk.HomeComponent)
  },
  {
    path: 'blog',
    loadComponent: () => import('@/pages/blog/blog.component')
      .then(chunk => chunk.BlogComponent)
  },
  {
    path: 'blog/new',
    loadComponent: () => import('@/pages/article-edit/article-edit.component')
      .then(chunk => chunk.ArticleEditComponent)
  },
  {
    path: 'blog/article/:id',
    loadComponent: () => import('@/pages/article-show/article-show.component')
      .then(chunk => chunk.ArticleShowComponent)
  },
  {
    path: 'blog/article/edit/:id',
    loadComponent: () => import('@/pages/article-edit/article-edit.component')
      .then(chunk => chunk.ArticleEditComponent)
  },
  {
    path: 'blog/search',
    loadComponent: () => import('@/pages/search-article/search-article.component')
      .then(chunk => chunk.SearchArticleComponent)
  },
  {
    path: '**',
    redirectTo: ''
  },
];
