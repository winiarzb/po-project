import {Component, Inject, OnInit} from '@angular/core';
import {ResourceCreateComponentBase} from '../../../resources/components/create-forms/resource-create-component.abstract';
import {ContractCreateRequest} from '../../../resources/models/contract/contract-create-request.model';
import {ResourceStateService} from '../../../resources/services/resource-state.service';
import {ActivatedRoute} from '@angular/router';
import {ContractStatus} from '../../../../shared/enums/contract-status.enum';
import {UserStateService} from '../../../user/services/user-state.service';
import notify from 'devextreme/ui/notify';


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
// export class CreateContractComponent extends ResourceCreateComponentBase<ContractCreateRequest> {
  export class CreateContractComponent {


  constructor(
    @Inject('ResContractStateService') stateService: ResourceStateService<ContractCreateRequest>,
    activatedRoute: ActivatedRoute,
    private _userService: UserStateService
  

  ) {
    
  }



public save(): void {
  
  this.stateService.state.contractStatus = ContractStatus.Created;
  this.stateService.state.clientId =  this._userService.state.id;
  
  // this.serviceState.create().subscribe(res => {
    this.stateService.create().subscribe(res => {

    notify('Złożono ofertę', 'success');
    // this.goBack();
  });
}

}