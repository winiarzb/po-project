import { Component, OnInit } from '@angular/core';
import {ContractAuctionStateService} from '../../services/contract-auction-state.service';
import {ActivatedRoute} from '@angular/router';
import {Contract} from '../../../../shared/models/contract.model';

@Component({
  selector: 'bh-contract-auction',
  templateUrl: './contract-auction.component.html',
  styleUrls: ['./contract-auction.component.scss']
})
export class ContractAuctionComponent implements OnInit {

  public get state(): Contract {
    return this._state.state;
  }

  constructor(
    private _state: ContractAuctionStateService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this._activatedRoute.snapshot.params;
    this._state.initFromResponse(params['id']);
  }

  public onBid(): void {
    console.log(this.state);
  }
}
