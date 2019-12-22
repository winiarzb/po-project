import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {Planet} from '../../../../shared/models/planet.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';

@Component({
  selector: 'bh-res-planets',
  templateUrl: './res-planets.component.html',
  styleUrls: ['./res-planets.component.scss']
})
export class ResPlanetsComponent extends ResourceEditComponentBase<Planet[]> {

  constructor(
    @Inject('ResPlanetStateService') stateService: ResourceStateService<Planet[]>
  ) {
    super(stateService);
  }
}
