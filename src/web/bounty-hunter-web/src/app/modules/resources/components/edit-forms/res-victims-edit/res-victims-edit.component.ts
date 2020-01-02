import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Contract} from '../../../../../shared/models/contract.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';
import {Victim} from '../../../../../shared/models/victim.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-victims-edit',
  templateUrl: './res-victims-edit.component.html',
  styleUrls: ['./res-victims-edit.component.scss']
})
export class ResVictimsEditComponent extends ResourceEditComponentBase<Victim> {
  constructor(
    @Inject('ResVictimStateService') stateService: ResourceStateService<Victim>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
