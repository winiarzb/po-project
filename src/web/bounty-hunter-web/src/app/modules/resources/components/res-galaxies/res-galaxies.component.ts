import {Component, Inject, Input, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {Galaxy} from '../../../../shared/models/galaxy.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';

@Component({
  selector: 'bh-res-galaxies',
  templateUrl: './res-galaxies.component.html',
  styleUrls: ['./res-galaxies.component.scss']
})
export class ResGalaxiesComponent extends ResourceEditComponentBase<Galaxy[]> {

  constructor(
    @Inject('ResGalaxyStateService') stateService: ResourceStateService<Galaxy[]>
  ) {
    super(stateService);
  }

}
