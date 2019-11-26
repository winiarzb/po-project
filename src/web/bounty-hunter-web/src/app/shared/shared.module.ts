import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/components/header/header.component';
import { NavigationLinkComponent } from './layout/components/navigation-link/navigation-link.component';
import {RouterModule} from "@angular/router";
import { CardComponent } from './components/card/card.component';
import { CardHeaderDirective } from './components/card/directives/card-header.directive';
import { MainComponent } from './layout/components/main/main.component';
import { SimplifiedLayoutComponent } from './layout/components/simplified-layout/simplified-layout.component';
import { ButtonDirective } from './directives/button.directive';
import { UserComponent } from './layout/components/user/user.component';
import { LogoComponent } from './layout/components/logo/logo.component';
import { InputDirective } from './directives/input.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationLinkComponent,
    CardComponent,
    CardHeaderDirective,
    MainComponent,
    SimplifiedLayoutComponent,
    ButtonDirective,
    UserComponent,
    LogoComponent,
    InputDirective
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    CardComponent,
    ButtonDirective,
    InputDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
