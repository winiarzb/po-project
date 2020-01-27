import {Component, Inject, OnInit} from '@angular/core';
import {ResourceCreateComponentBase} from '../../../resources/components/create-forms/resource-create-component.abstract';
import {ContractCreateRequest} from '../../../resources/models/contract/contract-create-request.model';
import {ResourceStateService} from '../../../resources/services/resource-state.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
// export class CreateContractComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
export class CreateContractComponent extends ResourceCreateComponentBase<ContractCreateRequest> {

  constructor(
    @Inject('ResContractStateService') stateService: ResourceStateService<ContractCreateRequest>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}

