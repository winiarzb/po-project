import {Inject, Injectable} from '@angular/core';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {Contract} from '../../../shared/models/contract.model';
import {ResourcesApiService} from '../../../shared/services/resources-api.service';

@Injectable({
  providedIn: 'root'
})
export class ContractAuctionStateService extends StateServiceBase<Contract> {

  constructor(
    @Inject('ContractApiService') _resourceApiService: ResourcesApiService<Contract>
  ) {
    super(_resourceApiService);
  }

  public initFromResponse(id: number): void {
    (this.apiService as ResourcesApiService<Contract>).getById(id).subscribe(res => {
      this.initState(res);
    })
  }
}
