import {Component, Inject, OnInit} from '@angular/core';
import {ResourceListComponentBase} from '../../resource-list-component.abstract';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Planet} from '../../../../../shared/models/planet.model';

@Component({
  selector: 'bh-res-planets',
  templateUrl: './res-planets.component.html',
  styleUrls: ['./res-planets.component.scss']
})
export class ResPlanetsComponent extends ResourceListComponentBase<Planet[]> {

  constructor(
    @Inject('ResPlanetStateService') stateService: ResourceStateService<Planet[]>
  ) {
    super(stateService);
  }
}
