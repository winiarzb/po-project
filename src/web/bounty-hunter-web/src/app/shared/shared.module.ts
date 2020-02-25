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
import { PriorityFormEditorDirective } from './directives/editors/priority-form-editor.directive';
import { DictionaryTypeEditorDirective } from './directives/editors/dictionary-type-editor.directive';
import { PlanetTypeEditorDirective } from './directives/editors/planet-type-editor.directive';
import { UserRoleEditorDirective } from './directives/editors/user-role-editor.directive';
import { ThreatLevelEditorDirective } from './directives/editors/threat-level-editor.directive';
import {DxButtonModule, DxMenuModule} from 'devextreme-angular';
import { LinkAccessorDirective } from './directives/link-accessor.directive';
import { VictimEditorDirective } from './directives/editors/victim-editor.directive';
import { DistrictEditorDirective } from './directives/editors/district-editor.directive';
import { ContractStatusEditorDirective } from './directives/editors/contract-status-editor.directive';
import { PlanetEditorDirective } from './directives/editors/planet-editor.directive';
import { GalaxyEditorDirective } from './directives/editors/galaxy-editor.directive';
import { PlanetMultipleEditorDirective } from './directives/editors/planet-multiple-editor.directive';
import { DistrictMultipleEditorDirective } from './directives/editors/district-multiple-editor.directive';
import { ClientEditorDirective } from './directives/editors/client-editor.directive';
import { UserDistrictsChooserEditorDirective } from './directives/editors/user-districts-chooser-editor.directive';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';



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
    InputDirective,
    PriorityFormEditorDirective,
    DictionaryTypeEditorDirective,
    PlanetTypeEditorDirective,
    UserRoleEditorDirective,
    ThreatLevelEditorDirective,
    LinkAccessorDirective,
    VictimEditorDirective,
    DistrictEditorDirective,
    ContractStatusEditorDirective,
    PlanetEditorDirective,
    GalaxyEditorDirective,
    PlanetMultipleEditorDirective,
    DistrictMultipleEditorDirective,
    ClientEditorDirective,
    UserDistrictsChooserEditorDirective,
    UnauthorizedComponent,
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    CardComponent,
    ButtonDirective,
    InputDirective,
    PriorityFormEditorDirective,
    DictionaryTypeEditorDirective,
    PlanetTypeEditorDirective,
    UserRoleEditorDirective,
    ThreatLevelEditorDirective,
    VictimEditorDirective,
    DistrictEditorDirective,
    ContractStatusEditorDirective,
    PlanetEditorDirective,
    GalaxyEditorDirective,
    PlanetMultipleEditorDirective,
    DistrictMultipleEditorDirective,
    ClientEditorDirective,
    UserDistrictsChooserEditorDirective,
    LinkAccessorDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    DxButtonModule,
    DxMenuModule
  ]
})
export class SharedModule { }
