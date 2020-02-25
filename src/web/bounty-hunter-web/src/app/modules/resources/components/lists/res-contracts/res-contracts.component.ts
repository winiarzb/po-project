import {Component, Inject, Input} from '@angular/core';
import {ResourceListComponentBase} from '../../resource-list-component.abstract';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Contract} from '../../../../../shared/models/contract.model';

@Component({
  selector: 'bh-res-contracts',
  templateUrl: './res-contracts.component.html',
  styleUrls: ['./res-contracts.component.scss']
})
export class ResContractsComponent extends ResourceListComponentBase<Contract[]> {
  constructor(
    @Inject('ResContractStateService') stateService: ResourceStateService<Contract[]>
  ) {
    super(stateService);
  }
}
