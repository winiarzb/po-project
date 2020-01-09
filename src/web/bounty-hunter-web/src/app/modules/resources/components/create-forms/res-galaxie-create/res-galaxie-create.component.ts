import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Contract} from '../../../../../shared/models/contract.model';
import {ResourceCreateComponentBase} from '../resource-create-component.abstract';
import {GalaxyCreateRequest} from '../../../models/galaxy/galaxy-create-request.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-galaxie-create',
  templateUrl: './res-galaxie-create.component.html',
  styleUrls: ['./res-galaxie-create.component.scss']
})

export class ResGalaxieCreateComponent extends ResourceCreateComponentBase<GalaxyCreateRequest> {
  constructor(
    @Inject('ResGalaxyStateService') stateService: ResourceStateService<GalaxyCreateRequest>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
