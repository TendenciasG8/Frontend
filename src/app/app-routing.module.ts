import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
    import('./pages/landing/landing.module').then((m) => m.landingModule),
  },
  {
    path: '',
    loadChildren: () =>
    import('./pages/login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'admin',
    loadChildren: () =>
    import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  
  {
    path: 'user',
    loadChildren: () =>
    import('./pages/user/user.module').then((m) => m.UserModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}