import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {UserModule} from "./modules/user/user.module";
import {UserStateService} from "./modules/user/services/user-state.service";
import {NavigatorService} from "./shared/services/navigator.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ResourcesApiService} from './shared/services/resources-api.service';
import {AuthInterceptorService} from './shared/interceptors/auth-interceptor.service';
import {UserResourceApiService} from './modules/user/services/user-resource-api.service';
import {PlanetResourceApiServiceService} from './modules/resources/services/custom-api-services/planet-resource-api-service.service';
import {ErrorInterceptorService} from './shared/interceptors/error-interceptor.service';
import {ContractResourceApiService} from './modules/resources/services/custom-api-services/contract-resource-api.service';

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
    UserStateService,
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
      useClass: PlanetResourceApiServiceService
    },
    {
      provide: 'ReviewApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'review'),
      deps: [HttpClient]
    },
    {
      provide: 'UserAccountApiService',
      useClass: UserResourceApiService
    },
    {
      provide: 'VictimApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'victim'),
      deps: [HttpClient]
    },
    {
      provide: 'ContractApiService',
      useClass: ContractResourceApiService
    },
    {
      provide: 'RoleApiService',
      useFactory: (httpClient: HttpClient) => new ResourcesApiService(httpClient, 'role'),
      deps: [HttpClient]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (userService: UserStateService) => {
        return () => {
          return new Promise<void>(resolve => {
            userService.initStateFromLocalStorage();
            resolve();
          });
        }
      },
      deps: [UserStateService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
