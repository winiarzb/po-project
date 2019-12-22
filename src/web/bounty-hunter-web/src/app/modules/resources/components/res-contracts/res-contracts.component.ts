import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {Contract} from '../../../../shared/models/contract.model';

@Component({
  selector: 'bh-res-contracts',
  templateUrl: './res-contracts.component.html',
  styleUrls: ['./res-contracts.component.scss']
})
export class ResContractsComponent implements OnInit {

  constructor(
    @Inject('ResContractStateService') private _state: ResourceStateService<Contract[]>
  ) { }

  ngOnInit() {
  }

}
