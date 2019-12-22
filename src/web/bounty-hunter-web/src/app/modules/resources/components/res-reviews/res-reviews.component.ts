import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {Review} from '../../../../shared/models/review.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';
import {Planet} from '../../../../shared/models/planet.model';

@Component({
  selector: 'bh-res-reviews',
  templateUrl: './res-reviews.component.html',
  styleUrls: ['./res-reviews.component.scss']
})
export class ResReviewsComponent extends ResourceEditComponentBase<Review[]> {

  constructor(
    @Inject('ResReviewStateService') stateService: ResourceStateService<Review[]>
  ) {
    super(stateService);
  }

}
