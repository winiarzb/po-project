import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {Contract} from '../../../../shared/models/contract.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';

@Component({
  selector: 'bh-res-contracts',
  templateUrl: './res-contracts.component.html',
  styleUrls: ['./res-contracts.component.scss']
})
export class ResContractsComponent extends ResourceEditComponentBase<Contract[]> {

  constructor(
    @Inject('ResContractStateService') stateService: ResourceStateService<Contract[]>
  ) {
    super(stateService);
  }
}
