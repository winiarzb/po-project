import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractsListComponent} from "./components/contracts-list/contracts-list.component";
import {CreateContractComponent} from "./components/create-contract/create-contract.component";
import {ContractAuctionComponent} from './components/contract-auction/contract-auction.component';


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
  },
  {
    path: 'auction/:id',
    component: ContractAuctionComponent,
    data: {
      preview: false
    }
  },
  {
    path: 'preview/:id',
    component: ContractAuctionComponent,
    data: {
      preview: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
