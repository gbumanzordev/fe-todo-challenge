import { Routes } from '@angular/router';

import { MainLayoutComponent } from '@pages/main-layout/main-layout.component';
import { NotFoundComponent } from '@ui/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('./routes/feature.routes').then((r) => r.featureRoutes),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
