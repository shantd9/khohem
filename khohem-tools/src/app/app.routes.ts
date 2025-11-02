import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'recipes',
    loadComponent: () => import('./recipes/recipes.component'),
  },
  {
    path: 'quotes',
    loadComponent: () => import('./quotes/quotes.component'),
  },
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  }
];
