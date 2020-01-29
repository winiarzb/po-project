import {Inject, Injectable} from '@angular/core';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {ContractAddReviewModel} from '../models/contract-add-review-model';
import {ResourcesApiService} from '../../../shared/services/resources-api.service';
import {Review} from '../../../shared/models/review.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractAddReviewStateService extends StateServiceBase<ContractAddReviewModel> {

  constructor(
    @Inject('ReviewApiService')  reviewApiService: ResourcesApiService<Review>
  ) {
    super(reviewApiService);
  }

  public addReview(): Observable<Review> {
    return (this.apiService as ResourcesApiService<Review>).create(this.state);
  }
}
