import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {District} from '../../../../shared/models/district.model';

@Component({
  selector: 'bh-res-districts',
  templateUrl: './res-districts.component.html',
  styleUrls: ['./res-districts.component.scss']
})
export class ResDistrictsComponent implements OnInit {

  constructor(
    @Inject('ResDistrictStateService') private _state: ResourceStateService<District[]>
  ) { }

  ngOnInit() {
  }

}
