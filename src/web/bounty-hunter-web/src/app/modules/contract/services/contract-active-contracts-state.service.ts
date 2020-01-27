import {Inject, Injectable} from '@angular/core';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {Contract} from '../../../shared/models/contract.model';
import {ResourcesApiService} from '../../../shared/services/resources-api.service';
import {map} from 'rxjs/operators';
import {ContractStatus} from '../../../shared/enums/contract-status.enum';
import {ContractResourceApiService} from '../../resources/services/custom-api-services/contract-resource-api.service';
import {UserStateService} from '../../user/services/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class ContractActiveContractsStateService extends StateServiceBase<Contract[]> {

  constructor(
    @Inject('ContractApiService') _resourceApiService: ResourcesApiService<Contract>,
    private _userService: UserStateService
  ) {
    super(_resourceApiService);
  }

  public initActiveContractsFromResponse(): void {
    (this.apiService as ContractResourceApiService).getAll()
      .pipe(map(res => res.filter(contract => contract.contractStatus === ContractStatus.Created)))
      .subscribe(res => {
      this.initState(res);
    });
  }

  public initClientContractsFromResponse(): void {
    (this.apiService as ContractResourceApiService).getByUser(this._userService.state.id).subscribe(res => {
        this.initState(res);
      });
  }
}
