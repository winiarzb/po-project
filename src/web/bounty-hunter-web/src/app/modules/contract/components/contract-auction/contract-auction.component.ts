import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContractAuctionStateService} from '../../services/contract-auction-state.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Auction} from '../../models/auction.model';
import notify from 'devextreme/ui/notify';

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
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this._activatedRoute.snapshot.params;
    this._auctionSubscription = this._stateService.initFromResponse(params['id']).subscribe(res => {
      console.log(this.state)
    });
  }

  ngOnDestroy(): void {
    this._auctionSubscription.unsubscribe();
  }

  public onBid(): void {
    this._stateService.makeBid().subscribe(res => {
      notify('Złożono ofertę', 'success');
    });
  }
}
