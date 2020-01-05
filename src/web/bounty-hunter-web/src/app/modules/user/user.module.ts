import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DxButtonModule, DxFormModule} from 'devextreme-angular';


@NgModule({
  declarations: [UserComponent, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DxFormModule,
    FormsModule,
    DxButtonModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent
  ]
})
export class UserModule { }
