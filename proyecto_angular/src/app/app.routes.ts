import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@/pages/home/home.component').then(chunk => chunk.HomeComponent)
  },
  {
    path: 'blog',
    loadComponent: () => import('@/pages/blog/blog.component').then(chunk => chunk.BlogComponent)
  },
];
