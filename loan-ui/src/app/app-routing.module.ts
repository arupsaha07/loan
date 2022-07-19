import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FrontendLayoutComponent,
    loadChildren: () => import('./front-end/frontend-routing.module').then(m => m.FrontEndRoutingModule)
  },
  {
    path:'backend',
    canActivate:[AuthGuard],
    component: BackendLayoutComponent,
    loadChildren: () => import('./backend/backend-routing.module').then(m => m.BackendRoutingModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
