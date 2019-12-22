import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourcesComponent} from './components/resources/resources.component';
import {DxDataGridModule, DxTabsModule} from 'devextreme-angular';
import {ResourcesRoutingModule} from './resources-routing.module';
import {ResContractsComponent} from './components/res-contracts/res-contracts.component';
import {ResDictionariesComponent} from './components/res-dictionaries/res-dictionaries.component';
import {ResDistrictsComponent} from './components/res-districts/res-districts.component';
import {ResGalaxiesComponent} from './components/res-galaxies/res-galaxies.component';
import {ResPlanetsComponent} from './components/res-planets/res-planets.component';
import {ResReviewsComponent} from './components/res-reviews/res-reviews.component';
import {ResVictimsComponent} from './components/res-victims/res-victims.component';
import {ResUsersComponent} from './components/res-users/res-users.component';
import {ResourceStateService} from './services/resource-state.service';
import {ResourcesApiService} from './services/resources-api.service';
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

const resourceStateServiceFactoryProvider = <TModel>(apiService: ResourcesApiService, requestFactory: RequestFactoryServiceBase) => {
  return new ResourceStateService<TModel>(apiService, requestFactory);
};

@NgModule({
  declarations: [ResourcesComponent, ResContractsComponent, ResDictionariesComponent, ResDistrictsComponent, ResGalaxiesComponent, ResPlanetsComponent, ResReviewsComponent, ResVictimsComponent, ResUsersComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    HttpClientModule,
    DxTabsModule,
    DxDataGridModule
  ],
  providers: [
    {
      provide: 'ResDictionaryApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'dict'),
      deps: [HttpClient]
    },
    {
      provide: 'ResDistrictApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'district'),
      deps: [HttpClient]
    },
    {
      provide: 'ResGalaxyApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'galaxy'),
      deps: [HttpClient]
    },
    {
      provide: 'ResPlanetApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'planet'),
      deps: [HttpClient]
    },
    {
      provide: 'ResReviewApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'review'),
      deps: [HttpClient]
    },
    {
      provide: 'ResUserAccountApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'user'),
      deps: [HttpClient]
    },
    {
      provide: 'ResVictimApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'victim'),
      deps: [HttpClient]
    },
    {
      provide: 'ResContractApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'contract'),
      deps: [HttpClient]
    },
    {
      provide: 'ResDictionaryStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['ResDictionaryApiService', ResDictionaryRequestFactoryService]
    },
    {
      provide: 'ResDistrictStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['ResDistrictApiService', ResDistrictRequestFactoryService]
    },
    {
      provide: 'ResGalaxyStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['ResGalaxyApiService', ResGalaxyRequestFactoryService]
    },
    {
      provide: 'ResPlanetStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['ResPlanetApiService', ResPlanetRequestFactoryService]
    },
    {
      provide: 'ResReviewStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['ResReviewApiService', ResReviewRequestFactoryService]
    },
    {
      provide: 'ResUserAccountStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['ResUserAccountApiService', ResUserAccountRequestFactoryService]
    },
    {
      provide: 'ResVictimStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['ResVictimApiService', ResVictimRequestFactoryService]
    },
    {
      provide: 'ResContractStateService',
      useFactory: resourceStateServiceFactoryProvider,
      deps: ['ResContractApiService', ResContractRequestFactoryService]
    },
  ]
})
export class ResourcesModule {
}
