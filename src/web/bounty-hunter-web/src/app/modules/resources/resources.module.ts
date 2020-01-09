import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourcesComponent} from './components/resources/resources.component';
import {DxButtonModule, DxDataGridModule, DxFormModule, DxTabsModule, DxValidationGroupModule} from 'devextreme-angular';
import {ResourcesRoutingModule} from './resources-routing.module';
import {ResourceStateService} from './services/resource-state.service';
import {ResourcesApiService} from '../../shared/services/resources-api.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ResDictionaryRequestFactoryService} from './services/request-services/res-dictionary-request-factory.service';
import {ResDistrictRequestFactoryService} from './services/request-services/res-district-request-factory.service';
import {ResGalaxyRequestFactoryService} from './services/request-services/res-galaxy-request-factory.service';
import {ResPlanetRequestFactoryService} from './services/request-services/res-planet-request-factory.service';
import {ResReviewRequestFactoryService} from './services/request-services/res-review-request-factory.service';
import {ResUserAccountRequestFactoryService} from './services/request-services/res-user-account-request-factory.service';
import {ResVictimRequestFactoryService} from './services/request-services/res-victim-request-factory.service';
import {ResContractRequestFactoryService} from './services/request-services/res-contract-request-factory.service';
import {RequestFactoryServiceBase} from '../../shared/services/request-factory-service.abstract';
import { ResContractsEditComponent } from './components/edit-forms/res-contracts-edit/res-contracts-edit.component';
import { ResDictionariesEditComponent } from './components/edit-forms/res-dictionaries-edit/res-dictionaries-edit.component';
import { ResDistrictsEditComponent } from './components/edit-forms/res-districts-edit/res-districts-edit.component';
import { ResGalaxiesEditComponent } from './components/edit-forms/res-galaxies-edit/res-galaxies-edit.component';
import { ResPlanetsEditComponent } from './components/edit-forms/res-planets-edit/res-planets-edit.component';
import { ResReviewsEditComponent } from './components/edit-forms/res-reviews-edit/res-reviews-edit.component';
import { ResUsersEditComponent } from './components/edit-forms/res-users-edit/res-users-edit.component';
import { ResVictimsEditComponent } from './components/edit-forms/res-victims-edit/res-victims-edit.component';
import {ResPlanetsComponent} from './components/lists/res-planets/res-planets.component';
import {ResContractsComponent} from './components/lists/res-contracts/res-contracts.component';
import {ResReviewsComponent} from './components/lists/res-reviews/res-reviews.component';
import {ResUsersComponent} from './components/lists/res-users/res-users.component';
import {ResDictionariesComponent} from './components/lists/res-dictionaries/res-dictionaries.component';
import {ResGalaxiesComponent} from './components/lists/res-galaxies/res-galaxies.component';
import {ResDistrictsComponent} from './components/lists/res-districts/res-districts.component';
import {ResVictimsComponent} from './components/lists/res-victims/res-victims.component';
import { EditFormWrapperComponent } from './components/edit-form-wrapper/edit-form-wrapper.component';
import {SharedModule} from '../../shared/shared.module';
import { CreateFormWrapperComponent } from './components/create-form-wrapper/create-form-wrapper.component';
import { ResContractCreateComponent } from './components/create-forms/res-contract-create/res-contract-create.component';
import { ResDictionaryCreateComponent } from './components/create-forms/res-dictionary-create/res-dictionary-create.component';
import { ResDistrictCreateComponent } from './components/create-forms/res-district-create/res-district-create.component';
import { ResGalaxieCreateComponent } from './components/create-forms/res-galaxie-create/res-galaxie-create.component';
import { ResPlanetCreateComponent } from './components/create-forms/res-planet-create/res-planet-create.component';
import { ResReviewCreateComponent } from './components/create-forms/res-review-create/res-review-create.component';
import { ResUserCreateComponent } from './components/create-forms/res-user-create/res-user-create.component';
import { ResVictimCreateComponent } from './components/create-forms/res-victim-create/res-victim-create.component';

const resourceStateServiceFactoryProvider = <TModel>(apiService: ResourcesApiService, requestFactory: RequestFactoryServiceBase) => {
  return new ResourceStateService<TModel>(apiService, requestFactory);
};

@NgModule({
  declarations: [
    ResourcesComponent,
    ResContractsComponent,
    ResDictionariesComponent,
    ResDistrictsComponent,
    ResGalaxiesComponent,
    ResPlanetsComponent,
    ResReviewsComponent,
    ResVictimsComponent,
    ResUsersComponent,
    ResContractsEditComponent,
    ResDictionariesEditComponent,
    ResDistrictsEditComponent,
    ResGalaxiesEditComponent,
    ResPlanetsEditComponent,
    ResReviewsEditComponent,
    ResUsersEditComponent,
    ResVictimsEditComponent,
    EditFormWrapperComponent,
    CreateFormWrapperComponent,
    ResContractCreateComponent,
    ResDictionaryCreateComponent,
    ResDistrictCreateComponent,
    ResGalaxieCreateComponent,
    ResPlanetCreateComponent,
    ResReviewCreateComponent,
    ResUserCreateComponent,
    ResVictimCreateComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    HttpClientModule,
    DxTabsModule,
    DxDataGridModule,
    DxButtonModule,
    DxValidationGroupModule,
    DxFormModule,
    SharedModule
  ],
  providers: [
    {
      provide: 'ResDictionaryStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['DictionaryApiService', ResDictionaryRequestFactoryService]
    },
    {
      provide: 'ResDistrictStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['DistrictApiService', ResDistrictRequestFactoryService]
    },
    {
      provide: 'ResGalaxyStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['GalaxyApiService', ResGalaxyRequestFactoryService]
    },
    {
      provide: 'ResPlanetStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['PlanetApiService', ResPlanetRequestFactoryService]
    },
    {
      provide: 'ResReviewStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['ReviewApiService', ResReviewRequestFactoryService]
    },
    {
      provide: 'ResUserAccountStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['UserAccountApiService', ResUserAccountRequestFactoryService]
    },
    {
      provide: 'ResVictimStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['VictimApiService', ResVictimRequestFactoryService]
    },
    {
      provide: 'ResContractStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['ContractApiService', ResContractRequestFactoryService]
    },
  ]
})
export class ResourcesModule {
}
