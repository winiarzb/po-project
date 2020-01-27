import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractsListComponent } from './components/contracts-list/contracts-list.component';
import { CreateContractComponent } from './components/create-contract/create-contract.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DxButtonModule, DxDataGridModule, DxFormModule} from 'devextreme-angular';
import { ContractAuctionComponent } from './components/contract-auction/contract-auction.component';

@NgModule({
  declarations: [ContractsListComponent, CreateContractComponent, ContractAuctionComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DxFormModule,
    DxDataGridModule,
    DxButtonModule,
    FormsModule
  ],
  exports: [
    CreateContractComponent
  ]
})
export class ContractModule { }
