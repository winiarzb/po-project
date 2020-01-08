import {Component, Inject} from '@angular/core';
import {ResourceCreateComponentBase} from '../resource-create-component.abstract';
import {ContractCreateRequest} from '../../../models/contract/contract-create-request.model';
import {ResourceStateService} from '../../../services/resource-state.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-contract-create',
  templateUrl: './res-contract-create.component.html',
  styleUrls: ['./res-contract-create.component.scss']
})
export class ResContractCreateComponent extends ResourceCreateComponentBase<ContractCreateRequest> {

  constructor(
    @Inject('ResContractStateService') stateService: ResourceStateService<ContractCreateRequest>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
