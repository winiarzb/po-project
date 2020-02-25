import {Inject, Injectable} from '@angular/core';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {ContractResourceApiService} from '../../resources/services/custom-api-services/contract-resource-api.service';
import {ContractRequestFactoryService} from './contract-request-factory.service';
import {UserStateService} from '../../user/services/user-state.service';
import {Observable} from 'rxjs';
import {ContractCreateRequest} from '../models/contract/contract-create-request.model';
import {ResourcesApiService} from '../../../shared/services/resources-api.service';

@Injectable({
  providedIn: 'root'
})

export class ContractCreateStateService extends StateServiceBase<ContractCreateRequest> {

  constructor(
    @Inject('ContractApiService') _resourceApiService: ContractResourceApiService,
    _requestFactory: ContractRequestFactoryService,
    private _userService: UserStateService
  ) {
    super(_resourceApiService, _requestFactory);
  }

  public create(): Observable<ContractCreateRequest> {
    this.state.clientId = this._userService.state.id;
    return (this.apiService as ResourcesApiService<ContractCreateRequest>).create(this.state);
  }
}
