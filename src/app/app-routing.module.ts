import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./auth/components/login/login.component";

const routes: Routes = [
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
