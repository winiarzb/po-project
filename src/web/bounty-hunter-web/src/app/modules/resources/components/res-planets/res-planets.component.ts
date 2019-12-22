import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {Planet} from '../../../../shared/models/planet.model';

@Component({
  selector: 'bh-res-planets',
  templateUrl: './res-planets.component.html',
  styleUrls: ['./res-planets.component.scss']
})
export class ResPlanetsComponent implements OnInit {

  constructor(
    @Inject('ResPlanetStateService') private _state: ResourceStateService<Planet[]>
  ) { }

  ngOnInit() {
  }

}
