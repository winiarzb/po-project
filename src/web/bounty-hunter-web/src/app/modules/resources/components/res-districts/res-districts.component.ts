import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {District} from '../../../../shared/models/district.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';

@Component({
  selector: 'bh-res-districts',
  templateUrl: './res-districts.component.html',
  styleUrls: ['./res-districts.component.scss']
})
export class ResDistrictsComponent extends ResourceEditComponentBase<District[]> {

  constructor(
    @Inject('ResDistrictStateService') stateService: ResourceStateService<District[]>
  ) {
    super(stateService);
  }
}
