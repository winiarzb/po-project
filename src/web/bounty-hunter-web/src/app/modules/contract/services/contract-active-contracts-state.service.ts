import {Inject, Injectable} from '@angular/core';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {Contract} from '../../../shared/models/contract.model';
import {ResourcesApiService} from '../../../shared/services/resources-api.service';
import {map} from 'rxjs/operators';
import {ContractStatus} from '../../../shared/enums/contract-status.enum';

@Injectable({
  providedIn: 'root'
})
export class ContractActiveContractsStateService extends StateServiceBase<Contract[]> {

  constructor(
    @Inject('ContractApiService') _resourceApiService: ResourcesApiService<Contract>
  ) {
    super(_resourceApiService);
  }

  public initFromResponse(): void {
    (this.apiService as ResourcesApiService<Contract>).getAll()
      .pipe(map(res => res.filter(contract => contract.contractStatus === ContractStatus.Created)))
      .subscribe(res => {
      this.initState(res);
    });
  }
}
