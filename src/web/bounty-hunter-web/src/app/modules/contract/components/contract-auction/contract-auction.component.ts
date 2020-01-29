import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContractAuctionStateService} from '../../services/contract-auction-state.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Auction} from '../../models/auction.model';
import notify from 'devextreme/ui/notify';
import {UserStateService} from '../../../user/services/user-state.service';
import {NavigatorService} from '../../../../shared/services/navigator.service';
import {ContractStatus} from '../../../../shared/enums/contract-status.enum';

@Component({
  selector: 'bh-contract-auction',
  templateUrl: './contract-auction.component.html',
  styleUrls: ['./contract-auction.component.scss']
})
export class ContractAuctionComponent implements OnInit, OnDestroy {

  public get isPreview(): boolean {
    return this._activatedRoute.snapshot.data['preview'];
  }

  public get state(): Auction {
    return this._stateService.state;
  }

  private _auctionSubscription: Subscription;

  constructor(
    private _stateService: ContractAuctionStateService,
    private _userService: UserStateService,
    private _activatedRoute: ActivatedRoute,
    private _navigator: NavigatorService
  ) { }

  ngOnInit() {
    const params = this._activatedRoute.snapshot.params;
    this._auctionSubscription = this._stateService.initFromResponse(params['id']).subscribe();
  }

  ngOnDestroy(): void {
    this._auctionSubscription.unsubscribe();
  }

  public onBid(): void {
    this._stateService.makeBid().subscribe(res => {
      notify('Złożono ofertę', 'success');
    });
  }

  public isClientAuction(): boolean {
    return this.state.contract.client.id === this._userService.state.id;
  }

  public isInProgress(): boolean {
    return this.state.contract.contractStatus === ContractStatus.In_Progress;
  }

  public isApproved(): boolean {
    return this.state.contract.contractStatus === ContractStatus.Approved;
  }

  public isHunterAuction(): boolean {
    return this.state.contract.hunter &&
    this.state.contract.hunter.id === this._userService.state.id;
  }

  public isDone(): boolean {
    return this.state.contract.contractStatus === ContractStatus.Done;
  }

  public cancelContract(): void {
    this._stateService.cancel().subscribe(res => {
      notify('Anulowano zlecenie', 'success');
      this._navigator.myContracts();
    })
  }

  public approveContract(): void {
    this._stateService.approve().subscribe(res =>{
      notify('Zatwierdzono', 'success');
      this._navigator.addReview(this.state.contract.id);
    });
  }

  public doneContract(): void {
    this._stateService.done().subscribe(res => {
      notify('Wykonano', 'success');
    });
  }
}
