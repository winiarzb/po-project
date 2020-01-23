import { Component } from '@angular/core';
import {ContractActiveContractsStateService} from '../../services/contract-active-contracts-state.service';
import {Contract} from '../../../../shared/models/contract.model';

@Component({
  selector: 'bh-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.scss']
})
export class ContractsListComponent{
  public state(): Contract[]{
    return this._state.state;
  }

  constructor(
    private _state: ContractActiveContractsStateService
  ) {}
}
