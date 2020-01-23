import {Inject, Injectable} from '@angular/core';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {Contract} from '../../../shared/models/contract.model';
import {ResourcesApiService} from '../../../shared/services/resources-api.service';

@Injectable({
  providedIn: 'root'
})
export class ContractActiveContractsStateService extends StateServiceBase<Contract[]> {

  constructor(
    @Inject('ContractApiService') private _resourceApiService: ResourcesApiService<Contract>
  ) {
    super();
    this._resourceApiService.getAll<Contract[]>().subscribe(res => {

    });
  }
}
