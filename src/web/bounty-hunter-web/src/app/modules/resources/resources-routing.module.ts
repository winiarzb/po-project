import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResourcesComponent} from './components/resources/resources.component';
import {ResPlanetsComponent} from './components/lists/res-planets/res-planets.component';
import {ResContractsComponent} from './components/lists/res-contracts/res-contracts.component';
import {ResReviewsComponent} from './components/lists/res-reviews/res-reviews.component';
import {ResUsersComponent} from './components/lists/res-users/res-users.component';
import {ResDictionariesComponent} from './components/lists/res-dictionaries/res-dictionaries.component';
import {ResGalaxiesComponent} from './components/lists/res-galaxies/res-galaxies.component';
import {ResDistrictsComponent} from './components/lists/res-districts/res-districts.component';
import {ResVictimsComponent} from './components/lists/res-victims/res-victims.component';
import {ResContractsEditComponent} from './components/edit-forms/res-contracts-edit/res-contracts-edit.component';
import {ResDictionariesEditComponent} from './components/edit-forms/res-dictionaries-edit/res-dictionaries-edit.component';
import {ResDistrictsEditComponent} from './components/edit-forms/res-districts-edit/res-districts-edit.component';
import {ResGalaxiesEditComponent} from './components/edit-forms/res-galaxies-edit/res-galaxies-edit.component';
import {ResPlanetsEditComponent} from './components/edit-forms/res-planets-edit/res-planets-edit.component';
import {ResReviewsEditComponent} from './components/edit-forms/res-reviews-edit/res-reviews-edit.component';
import {ResUsersEditComponent} from './components/edit-forms/res-users-edit/res-users-edit.component';
import {ResVictimsEditComponent} from './components/edit-forms/res-victims-edit/res-victims-edit.component';
import {EditFormWrapperComponent} from './components/edit-form-wrapper/edit-form-wrapper.component';
import {CreateFormWrapperComponent} from './components/create-form-wrapper/create-form-wrapper.component';
import {ResContractCreateComponent} from './components/create-forms/res-contract-create/res-contract-create.component';
import {ResDictionaryCreateComponent} from './components/create-forms/res-dictionary-create/res-dictionary-create.component';
import {ResDistrictCreateComponent} from './components/create-forms/res-district-create/res-district-create.component';
import {ResGalaxieCreateComponent} from './components/create-forms/res-galaxie-create/res-galaxie-create.component';
import {ResPlanetCreateComponent} from './components/create-forms/res-planet-create/res-planet-create.component';
import {ResReviewCreateComponent} from './components/create-forms/res-review-create/res-review-create.component';
import {ResUserCreateComponent} from './components/create-forms/res-user-create/res-user-create.component';
import {ResVictimCreateComponent} from './components/create-forms/res-victim-create/res-victim-create.component';
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
  },
  {
    path: 'edit',
    component: EditFormWrapperComponent,
    children: [
      {
        path: 'contracts/:id',
        component: ResContractsEditComponent
      },
      {
        path: 'dictionaries/:id',
        component: ResDictionariesEditComponent
      },
      {
        path: 'districts/:id',
        component: ResDistrictsEditComponent
      },
      {
        path: 'galaxies/:id',
        component: ResGalaxiesEditComponent
      },
      {
        path: 'planets/:id',
        component: ResPlanetsEditComponent
      },
      {
        path: 'reviews/:id',
        component: ResReviewsEditComponent
      },
      {
        path: 'users/:id',
        component: ResUsersEditComponent
      },
      {
        path: 'victims/:id',
        component: ResVictimsEditComponent
      }
    ]
  },
  {
    path: 'create',
    component: CreateFormWrapperComponent,
    children: [
      {
        path: 'contracts',
        component: ResContractCreateComponent
      },
      {
        path: 'dictionaries',
        component: ResDictionaryCreateComponent
      },
      {
        path: 'districts',
        component: ResDistrictCreateComponent
      },
      {
        path: 'galaxies',
        component: ResGalaxieCreateComponent
      },
      {
        path: 'planets',
        component: ResPlanetCreateComponent
      },
      {
        path: 'reviews',
        component: ResReviewCreateComponent
      },
      {
        path: 'users',
        component: ResUserCreateComponent
      },
      {
        path: 'victims',
        component: ResVictimCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
