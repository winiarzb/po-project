import { Injectable } from '@angular/core';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {RequestFactoryServiceBase} from '../../../shared/services/request-factory-service.abstract';
import {ResourcesApiService} from './resources-api.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceStateService<TState> extends StateServiceBase<TState> {

  constructor(
    apiService: ResourcesApiService,
    requestFactoryService: RequestFactoryServiceBase
  ) {
    super(apiService, requestFactoryService);
  }
}
