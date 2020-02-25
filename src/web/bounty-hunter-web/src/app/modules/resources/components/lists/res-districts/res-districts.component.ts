import {Component, Inject, OnInit} from '@angular/core';
import {ResourceListComponentBase} from '../../resource-list-component.abstract';
import {ResourceStateService} from '../../../services/resource-state.service';
import {District} from '../../../../../shared/models/district.model';

@Component({
  selector: 'bh-res-districts',
  templateUrl: './res-districts.component.html',
  styleUrls: ['./res-districts.component.scss']
})
export class ResDistrictsComponent extends ResourceListComponentBase<District[]> {

  constructor(
    @Inject('ResDistrictStateService') stateService: ResourceStateService<District[]>
  ) {
    super(stateService);
  }
}
