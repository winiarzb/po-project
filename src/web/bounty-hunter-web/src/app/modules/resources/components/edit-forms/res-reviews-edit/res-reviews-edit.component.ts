import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Contract} from '../../../../../shared/models/contract.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';
import {Review} from '../../../../../shared/models/review.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-reviews-edit',
  templateUrl: './res-reviews-edit.component.html',
  styleUrls: ['./res-reviews-edit.component.scss']
})
export class ResReviewsEditComponent extends ResourceEditComponentBase<Review> {
  constructor(
    @Inject('ResReviewStateService') stateService: ResourceStateService<Review>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
