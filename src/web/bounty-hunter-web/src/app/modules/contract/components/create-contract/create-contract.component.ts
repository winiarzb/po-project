import {Component, OnInit} from '@angular/core';
import {ContractCreateRequest} from '../../../resources/models/contract/contract-create-request.model';
import {ActivatedRoute} from '@angular/router';
import {ContractStatus} from '../../../../shared/enums/contract-status.enum';
import notify from 'devextreme/ui/notify';
import {ContractCreateStateService} from '../../services/contract-create-state.service';
import {NavigatorService} from '../../../../shared/services/navigator.service';


@Component({
  selector: 'bh-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})

export class CreateContractComponent implements OnInit {

  public readonly minDate = new Date();
  private model: ContractCreateRequest;

  public get state(): ContractCreateRequest {
    return this._stateService.state;
  }

  constructor(
    private _stateService: ContractCreateStateService,
    private _activatedRoute: ActivatedRoute,
    private _navigator: NavigatorService,

  ) { }

  ngOnInit() {
    this.model = new ContractCreateRequest();
    this.model.contractStatus = ContractStatus.Created;
    this._stateService.initState(this.model);
  }

  public save(): void {
    console.log(this.state);
    this._stateService.create().subscribe(res => {
      notify('Zlecenie zostało utworzone', 'success');
      this._navigator.myContracts();
    });
  }

  public goToAddVictim(): void {
    this._navigator.addVictim();
  }
}
