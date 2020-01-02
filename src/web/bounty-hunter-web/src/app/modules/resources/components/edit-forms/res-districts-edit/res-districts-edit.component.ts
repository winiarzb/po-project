import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Contract} from '../../../../../shared/models/contract.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';
import {District} from '../../../../../shared/models/district.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-districts-edit',
  templateUrl: './res-districts-edit.component.html',
  styleUrls: ['./res-districts-edit.component.scss']
})
export class ResDistrictsEditComponent extends ResourceEditComponentBase<District> {

  constructor(
    @Inject('ResDistrictStateService') stateService: ResourceStateService<District>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
