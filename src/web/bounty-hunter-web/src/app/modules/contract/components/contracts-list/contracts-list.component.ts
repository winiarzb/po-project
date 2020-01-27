import {Component, OnInit} from '@angular/core';
import {ContractActiveContractsStateService} from '../../services/contract-active-contracts-state.service';
import {Contract} from '../../../../shared/models/contract.model';
import {NavigatorService} from '../../../../shared/services/navigator.service';

@Component({
  selector: 'bh-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.scss']
})
export class ContractsListComponent implements OnInit {
  public get state(): Contract[] {
    return this._state.state;
  }

  public selectedContract: Contract;

  constructor(
    private _state: ContractActiveContractsStateService,
    private _navigator: NavigatorService
  ) {}

  ngOnInit(): void {
    this._state.initFromResponse();
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
