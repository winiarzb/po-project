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
import {ContractAddReviewComponent} from './components/contract-add-review/contract-add-review.component';


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
    canActivate: [UserAuthGuard]
  },
  {
    path: 'add-victim',
    component: ContractCreateVictimComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'add-review/:id',
    component: ContractAddReviewComponent,
    canActivate: [ClientAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
