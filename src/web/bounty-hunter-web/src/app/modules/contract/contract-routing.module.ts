import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractsListComponent} from "./components/contracts-list/contracts-list.component";
import {CreateContractComponent} from "./components/create-contract/create-contract.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: ContractsListComponent
  },
  {
    path: 'create',
    component: CreateContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
