import { Routes } from '@angular/router';

export const featureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('../pages/dashboard/dashboard.component').then((c) => c.DashboardComponent),
  },
  {
    path: 'my-tasks',
    loadComponent: () => import('../pages/my-tasks/my-tasks.component').then((c) => c.MyTasksComponent),
  },
];
