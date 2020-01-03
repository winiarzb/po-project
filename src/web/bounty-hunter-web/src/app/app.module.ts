import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {UserModule} from "./modules/user/user.module";
import {UserService} from "./shared/services/user.service";
import {NavigatorService} from "./shared/services/navigator.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ResourcesApiService} from './shared/services/resources-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    NavigatorService,
    {
      provide: 'DictionaryApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'dict'),
      deps: [HttpClient]
    },
    {
      provide: 'DistrictApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'district'),
      deps: [HttpClient]
    },
    {
      provide: 'GalaxyApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'galaxy'),
      deps: [HttpClient]
    },
    {
      provide: 'PlanetApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'planet'),
      deps: [HttpClient]
    },
    {
      provide: 'ReviewApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'review'),
      deps: [HttpClient]
    },
    {
      provide: 'UserAccountApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'user'),
      deps: [HttpClient]
    },
    {
      provide: 'VictimApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'victim'),
      deps: [HttpClient]
    },
    {
      provide: 'ContractApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'contract'),
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
