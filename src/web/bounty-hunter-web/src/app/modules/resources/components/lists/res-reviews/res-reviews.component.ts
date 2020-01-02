import {Component, Inject, OnInit} from '@angular/core';
import {ResourceListComponentBase} from '../../resource-list-component.abstract';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Review} from '../../../../../shared/models/review.model';


@Component({
  selector: 'bh-res-reviews',
  templateUrl: './res-reviews.component.html',
  styleUrls: ['./res-reviews.component.scss']
})
export class ResReviewsComponent extends ResourceListComponentBase<Review[]> {

  constructor(
    @Inject('ResReviewStateService') stateService: ResourceStateService<Review[]>
  ) {
    super(stateService);
  }

}
