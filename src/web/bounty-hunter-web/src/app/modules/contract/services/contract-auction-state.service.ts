import {Inject, Injectable} from '@angular/core';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {Contract} from '../../../shared/models/contract.model';
import {ContractResourceApiService} from '../../resources/services/custom-api-services/contract-resource-api.service';
import {ContractRequestFactoryService} from './contract-request-factory.service';
import {UserStateService} from '../../user/services/user-state.service';
import {interval, Observable} from 'rxjs';
import {flatMap, map, tap} from 'rxjs/operators';
import {Auction} from '../models/auction.model';
import {ContractStatus} from '../../../shared/enums/contract-status.enum';

@Injectable({
  providedIn: 'root'
})
export class ContractAuctionStateService extends StateServiceBase<Auction> {

  constructor(
    @Inject('ContractApiService') _resourceApiService: ContractResourceApiService,
    private _requestFactory: ContractRequestFactoryService,
    private _userService: UserStateService
  ) {
    super(_resourceApiService);
  }

  public initFromResponse(id: number): Observable<Auction> {
    (this.apiService as ContractResourceApiService).getById(id)
      .pipe(
        map(res => new Auction(res)),
        tap(res => this.initState(res))
      ).subscribe();

    return interval(1000)
      .pipe(
        flatMap(() => (this.apiService as ContractResourceApiService).getById(id)),
        map(res => this.refreshState(res))
      );
  }

  public makeBid(): Observable<Contract> {
    const request = this._requestFactory.getChangePaymentRequest(this.state.contract.id, this._userService.state.id, this.state.bid);
    return (this.apiService as ContractResourceApiService).changePayment(request);
  }

  public refreshState(contract: Contract): Auction {
    this.state.contract = contract;
    return this.state;
  }

  public cancel(): Observable<Contract> {
    const request = this._requestFactory.getChangeStatus(this.state.contract.id, ContractStatus.Cancelled);
    return (this.apiService as ContractResourceApiService).changeStatus(request);
  }

  public approve(): Observable<Contract> {
    const request = this._requestFactory.getChangeStatus(this.state.contract.id, ContractStatus.Approved);
    return (this.apiService as ContractResourceApiService).changeStatus(request);
  }

  public done(): Observable<Contract> {
    const request = this._requestFactory.getChangeStatus(this.state.contract.id, ContractStatus.Done);
    return (this.apiService as ContractResourceApiService).changeStatus(request);
  }
}
