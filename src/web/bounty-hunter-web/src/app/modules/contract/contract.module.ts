import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractsListComponent } from './components/contracts-list/contracts-list.component';
import { CreateContractComponent } from './components/create-contract/create-contract.component';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {DxFormModule} from 'devextreme-angular';

@NgModule({
  declarations: [ContractsListComponent, CreateContractComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DxFormModule
  ],
  exports: [
    CreateContractComponent
  ]
})
export class ContractModule { }
