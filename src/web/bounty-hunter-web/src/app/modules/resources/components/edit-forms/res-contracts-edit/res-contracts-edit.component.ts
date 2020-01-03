import {Component, Inject} from '@angular/core';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';
import {Contract} from '../../../../../shared/models/contract.model';
import {ResourceStateService} from '../../../services/resource-state.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-contracts-edit',
  templateUrl: './res-contracts-edit.component.html',
  styleUrls: ['./res-contracts-edit.component.scss']
})
export class ResContractsEditComponent extends ResourceEditComponentBase<Contract> {

  constructor(
    @Inject('ResContractStateService') stateService: ResourceStateService<Contract>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
