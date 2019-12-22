import {Component, Input, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {Galaxy} from '../../../../shared/models/galaxy.model';

@Component({
  selector: 'bh-res-galaxies',
  templateUrl: './res-galaxies.component.html',
  styleUrls: ['./res-galaxies.component.scss']
})
export class ResGalaxiesComponent implements OnInit {

  constructor(
    @Input('ResGalaxyStateService') private _state: ResourceStateService<Galaxy[]>
  ) { }

  ngOnInit() {
  }

}
