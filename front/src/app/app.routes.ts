import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./componentes/pagina-menu/pagina-menu'),
    children: [
      {
        path: '',
        redirectTo: 'productos',
        pathMatch: 'full',
      },
      {
        path: 'productos',
        loadComponent: () => import('./pages/lista-productos/lista-productos'),
      },
      {
        path: 'detalle-producto/:id',
        loadComponent: () => import('./pages/detalle-producto/detalle-producto'),
      },
      {
        path: 'carrito',
        loadComponent: () => import('./pages/carrito/carrito'),
      },
      {
        path: 'catalogo',
        loadComponent: () => import('./pages/catalogo/catalogo'),
      },
    ],
  },
];
