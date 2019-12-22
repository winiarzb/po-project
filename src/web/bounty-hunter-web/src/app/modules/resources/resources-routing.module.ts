import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContractsListComponent} from '../contract/components/contracts-list/contracts-list.component';
import {CreateContractComponent} from '../contract/components/create-contract/create-contract.component';
import {ResourcesComponent} from './components/resources/resources.component';
import {ResourceEditComponent} from './components/resource-edit/resource-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent,
    children: [
      {
        path: '',
        redirectTo: 'contracts'
      },
      {
        path: 'contracts',
        component: ResourceEditComponent
      },
      {
        path: 'dictionaries',
        component: ResourceEditComponent
      },
      {
        path: 'districts',
        component: ResourceEditComponent
      },
      {
        path: 'galaxies',
        component: ResourceEditComponent
      },
      {
        path: 'planets',
        component: ResourceEditComponent
      },
      {
        path: 'reviews',
        component: ResourceEditComponent
      },
      {
        path: 'victims',
        component: ResourceEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
