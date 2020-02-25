import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {ResourceCreateComponentBase} from '../resource-create-component.abstract';
import {VictimCreateRequest} from '../../../models/victim/victim-create-request.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-victim-create',
  templateUrl: './res-victim-create.component.html',
  styleUrls: ['./res-victim-create.component.scss']
})

export class ResVictimCreateComponent extends ResourceCreateComponentBase<VictimCreateRequest> {
  public readonly max = new Date();

  constructor(
    @Inject('ResVictimStateService') stateService: ResourceStateService<VictimCreateRequest>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
