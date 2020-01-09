import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Contract} from '../../../../../shared/models/contract.model';
import {PlanetCreateRequest} from '../../../models/planet/planet-create-request.model';
import {ResourceCreateComponentBase} from '../resource-create-component.abstract';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-planet-create',
  templateUrl: './res-planet-create.component.html',
  styleUrls: ['./res-planet-create.component.scss']
})

export class ResPlanetCreateComponent extends ResourceCreateComponentBase<PlanetCreateRequest> {
  constructor(
    @Inject('ResPlanetStateService') stateService: ResourceStateService<PlanetCreateRequest>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
