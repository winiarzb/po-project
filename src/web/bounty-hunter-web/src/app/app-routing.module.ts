import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./shared/layout/components/main/main.component";
import {LoginComponent} from "./modules/user/components/login/login.component";
import {RegistrationComponent} from './modules/user/components/registration/registration.component';
import {AppComponent} from './app.component';
import {SimplifiedLayoutComponent} from './shared/layout/components/simplified-layout/simplified-layout.component';
import {AdminAuthGuard} from './shared/guards/admin-auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: 'contract',
            loadChildren: () => import('./modules/contract/contract.module').then(m => m.ContractModule),
            canActivate: []
          },
          {
            path: 'user',
            loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
            canActivate: []
          },
          {
            path: 'resources',
            loadChildren: () => import('./modules/resources/resources.module').then(m => m.ResourcesModule),
            canActivate: [AdminAuthGuard]
          }
        ]
      },
      {
        path: '',
        component: SimplifiedLayoutComponent,
        children: [
          {
            path: 'sign-up',
            component: RegistrationComponent
          },
          {
            path: 'login',
            component: LoginComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
