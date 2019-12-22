import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {Review} from '../../../../shared/models/review.model';

@Component({
  selector: 'bh-res-reviews',
  templateUrl: './res-reviews.component.html',
  styleUrls: ['./res-reviews.component.scss']
})
export class ResReviewsComponent implements OnInit {

  constructor(
    @Inject('ResReviewStateService') private _state: ResourceStateService<Review[]>
  ) { }

  ngOnInit() {
  }

}
