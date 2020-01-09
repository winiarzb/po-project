import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Contract} from '../../../../../shared/models/contract.model';
import {ResourceCreateComponentBase} from '../resource-create-component.abstract';
import {ReviewCreateRequest} from '../../../models/review/review-create-request.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-review-create',
  templateUrl: './res-review-create.component.html',
  styleUrls: ['./res-review-create.component.scss']
})

export class ResReviewCreateComponent extends ResourceCreateComponentBase<ReviewCreateRequest> {
  constructor(
    @Inject('ResReviewStateService') stateService: ResourceStateService<ReviewCreateRequest>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
