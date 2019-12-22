import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResourcesComponent} from './components/resources/resources.component';
import {ResContractsComponent} from './components/res-contracts/res-contracts.component';
import {ResDictionariesComponent} from './components/res-dictionaries/res-dictionaries.component';
import {ResDistrictsComponent} from './components/res-districts/res-districts.component';
import {ResGalaxiesComponent} from './components/res-galaxies/res-galaxies.component';
import {ResPlanetsComponent} from './components/res-planets/res-planets.component';
import {ResReviewsComponent} from './components/res-reviews/res-reviews.component';
import {ResVictimsComponent} from './components/res-victims/res-victims.component';
import {ResUsersComponent} from './components/res-users/res-users.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent,
    children: [
      {
        path: 'contracts',
        component: ResContractsComponent
      },
      {
        path: 'dictionaries',
        component: ResDictionariesComponent
      },
      {
        path: 'districts',
        component: ResDistrictsComponent
      },
      {
        path: 'galaxies',
        component: ResGalaxiesComponent
      },
      {
        path: 'planets',
        component: ResPlanetsComponent
      },
      {
        path: 'reviews',
        component: ResReviewsComponent
      },
      {
        path: 'users',
        component: ResUsersComponent
      },
      {
        path: 'victims',
        component: ResVictimsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
