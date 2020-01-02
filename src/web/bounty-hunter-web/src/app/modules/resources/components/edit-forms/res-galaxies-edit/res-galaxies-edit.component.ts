import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Contract} from '../../../../../shared/models/contract.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';
import {Galaxy} from '../../../../../shared/models/galaxy.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-galaxies-edit',
  templateUrl: './res-galaxies-edit.component.html',
  styleUrls: ['./res-galaxies-edit.component.scss']
})
export class ResGalaxiesEditComponent extends ResourceEditComponentBase<Galaxy> {
  constructor(
    @Inject('ResGalaxyStateService') stateService: ResourceStateService<Galaxy>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
