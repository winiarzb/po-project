import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './components/resources/resources.component';
import {DxTabsModule} from 'devextreme-angular';
import {ResourcesRoutingModule} from './resources-routing.module';
import { ResourceEditComponent } from './components/resource-edit/resource-edit.component';

@NgModule({
  declarations: [ResourcesComponent, ResourceEditComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    DxTabsModule
  ]
})
export class ResourcesModule { }
