import {Component, OnInit} from '@angular/core';
import {ContractActiveContractsStateService} from '../../services/contract-active-contracts-state.service';
import {Contract} from '../../../../shared/models/contract.model';
import {NavigatorService} from '../../../../shared/services/navigator.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.scss']
})
export class ContractsListComponent implements OnInit {
  public get state(): Contract[] {
    return this._state.state;
  }

  public get onlyMine(): boolean {
    return this._activatedRoute.snapshot.data['onlyMine'];
  }

  public selectedContract: Contract;

  constructor(
    private _state: ContractActiveContractsStateService,
    private _navigator: NavigatorService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onlyMine ?
      this._state.initClientContractsFromResponse() : this._state.initActiveContractsFromResponse();
  }

  public onSelect(selection: Contract[]): void {
    this.selectedContract = selection[0];
  }

  public navigateToAuction(): void {
    this._navigator.auction(this.selectedContract.id);
  }

  public navigateToContractPreview(): void {
    this._navigator.contractPreview(this.selectedContract.id);
  }
}
