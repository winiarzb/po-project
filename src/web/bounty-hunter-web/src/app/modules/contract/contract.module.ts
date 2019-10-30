import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractsListComponent } from './components/contracts-list/contracts-list.component';
import { CreateContractComponent } from './components/create-contract/create-contract.component';


@NgModule({
  declarations: [ContractsListComponent, CreateContractComponent],
  imports: [
    CommonModule,
    ContractRoutingModule
  ]
})
export class ContractModule { }
