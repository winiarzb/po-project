import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Contract} from '../../../../../shared/models/contract.model';
import {Planet} from '../../../../../shared/models/planet.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-planets-edit',
  templateUrl: './res-planets-edit.component.html',
  styleUrls: ['./res-planets-edit.component.scss']
})
export class ResPlanetsEditComponent extends ResourceEditComponentBase<Planet> {
  constructor(
    @Inject('ResPlanetStateService') stateService: ResourceStateService<Planet>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
