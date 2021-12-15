import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/components/login/login.component';
import {HomeComponent} from './page/components/home/home.component';
import {AuthGuard} from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'products',
            loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
          },
          {
            path: 'customers',
            loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
          }
        ]
      }
    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
