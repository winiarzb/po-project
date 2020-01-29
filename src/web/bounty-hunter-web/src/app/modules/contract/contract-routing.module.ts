import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractsListComponent} from "./components/contracts-list/contracts-list.component";
import {CreateContractComponent} from "./components/create-contract/create-contract.component";
import {ContractAuctionComponent} from './components/contract-auction/contract-auction.component';
import {UserAuthGuard} from '../../shared/guards/user-auth.guard';
import {ClientAuthGuard} from '../../shared/guards/client-auth.guard';
import {HunterAuthGuard} from '../../shared/guards/hunter-auth.guard';
import {ResVictimCreateComponent} from '../resources/components/create-forms/res-victim-create/res-victim-create.component';
import {ContractCreateVictimComponent} from './components/contract-create-victim/contract-create-victim.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: ContractsListComponent,
    data: {
      onlyMine: false
    },
    canActivate: [UserAuthGuard]
  },
  {
    path: 'create',
    component: CreateContractComponent,
    canActivate: [ClientAuthGuard]
  },
  {
    path: 'auction/:id',
    component: ContractAuctionComponent,
    data: {
      preview: false
    },
    canActivate: [HunterAuthGuard]
  },
  {
    path: 'preview/:id',
    component: ContractAuctionComponent,
    data: {
      preview: true
    },
    canActivate: [UserAuthGuard]
  },
  {
    path: 'my',
    component: ContractsListComponent,
    data: {
      onlyMine: true
    },
    canActivate: [ClientAuthGuard]
  },
  {
    path: 'add-victim',
    component: ContractCreateVictimComponent,
    canActivate: [UserAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
