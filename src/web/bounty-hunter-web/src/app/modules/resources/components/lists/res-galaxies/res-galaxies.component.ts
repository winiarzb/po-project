import {Component, Inject, Input, OnInit} from '@angular/core';
import {Galaxy} from '../../../../../shared/models/galaxy.model';
import {ResourceListComponentBase} from '../../resource-list-component.abstract';
import {ResourceStateService} from '../../../services/resource-state.service';

@Component({
  selector: 'bh-res-galaxies',
  templateUrl: './res-galaxies.component.html',
  styleUrls: ['./res-galaxies.component.scss']
})
export class ResGalaxiesComponent extends ResourceListComponentBase<Galaxy[]> {

  constructor(
    @Inject('ResGalaxyStateService') stateService: ResourceStateService<Galaxy[]>
  ) {
    super(stateService);
  }

}
