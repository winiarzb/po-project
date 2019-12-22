import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './components/resources/resources.component';
import {DxTabsModule} from 'devextreme-angular';
import {ResourcesRoutingModule} from './resources-routing.module';
import { ResContractsComponent } from './components/res-contracts/res-contracts.component';
import { ResDictionariesComponent } from './components/res-dictionaries/res-dictionaries.component';
import { ResDistrictsComponent } from './components/res-districts/res-districts.component';
import { ResGalaxiesComponent } from './components/res-galaxies/res-galaxies.component';
import { ResPlanetsComponent } from './components/res-planets/res-planets.component';
import { ResReviewsComponent } from './components/res-reviews/res-reviews.component';
import { ResVictimsComponent } from './components/res-victims/res-victims.component';

@NgModule({
  declarations: [ResourcesComponent, ResContractsComponent, ResDictionariesComponent, ResDistrictsComponent, ResGalaxiesComponent, ResPlanetsComponent, ResReviewsComponent, ResVictimsComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    DxTabsModule
  ]
})
export class ResourcesModule { }
