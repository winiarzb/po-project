import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./shared/layout/components/main/main.component";
import {LoginComponent} from "./modules/user/components/login/login.component";
import {RegistrationComponent} from './modules/user/components/registration/registration.component';
import {AppComponent} from './app.component';
import {SimplifiedLayoutComponent} from './shared/layout/components/simplified-layout/simplified-layout.component';


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
            loadChildren: () => import('./modules/contract/contract.module').then(m => m.ContractModule)
          },
          {
            path: 'user',
            loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
          },
          {
            path: 'resources',
            loadChildren: () => import('./modules/resources/resources.module').then(m => m.ResourcesModule)
          },
          {
            path: 'login',
            component: LoginComponent
          },
        ]
      },
      {
        path: '',
        component: SimplifiedLayoutComponent,
        children: [
          {
            path: 'registration',
            component: RegistrationComponent
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
