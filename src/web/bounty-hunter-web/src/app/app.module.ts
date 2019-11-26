import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {UserModule} from "./modules/user/user.module";
import {UserService} from "./shared/services/user.service";
import {NavigatorService} from "./shared/services/navigator.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    NavigatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
