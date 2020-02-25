import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Contract} from '../../../../../shared/models/contract.model';
import {ResourceCreateComponentBase} from '../resource-create-component.abstract';
import {DistrictCreateRequest} from '../../../models/district/district-create-request.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-district-create',
  templateUrl: './res-district-create.component.html',
  styleUrls: ['./res-district-create.component.scss']
})
export class ResDistrictCreateComponent extends ResourceCreateComponentBase<DistrictCreateRequest> {

  constructor(
    @Inject('ResDistrictStateService') stateService: ResourceStateService<DistrictCreateRequest>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
