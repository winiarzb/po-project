import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractsListComponent } from './components/contracts-list/contracts-list.component';
import { CreateContractComponent } from './components/create-contract/create-contract.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DxButtonModule, DxDataGridModule, DxFormModule} from 'devextreme-angular';
import { ContractAuctionComponent } from './components/contract-auction/contract-auction.component';
import {ResDictionaryRequestFactoryService} from '../resources/services/request-services/res-dictionary-request-factory.service';
import {ResDistrictRequestFactoryService} from '../resources/services/request-services/res-district-request-factory.service';
import {ResGalaxyRequestFactoryService} from '../resources/services/request-services/res-galaxy-request-factory.service';
import {ResPlanetRequestFactoryService} from '../resources/services/request-services/res-planet-request-factory.service';
import {ResReviewRequestFactoryService} from '../resources/services/request-services/res-review-request-factory.service';
import {ResUserAccountRequestFactoryService} from '../resources/services/request-services/res-user-account-request-factory.service';
import {ResVictimRequestFactoryService} from '../resources/services/request-services/res-victim-request-factory.service';
import {ResContractRequestFactoryService} from '../resources/services/request-services/res-contract-request-factory.service';
import {ResourcesApiService} from '../../shared/services/resources-api.service';
import {RequestFactoryServiceBase} from '../../shared/services/request-factory-service.abstract';
import {ResourceStateService} from '../resources/services/resource-state.service';

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
