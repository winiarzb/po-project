import {Component, OnInit} from '@angular/core';
import {ContractAddReviewStateService} from '../../services/contract-add-review-state.service';
import notify from 'devextreme/ui/notify';
import {NavigatorService} from '../../../../shared/services/navigator.service';
import {ActivatedRoute} from '@angular/router';
import {ContractAddReviewModel} from '../../models/contract-add-review-model';

@Component({
  selector: 'bh-contract-add-review',
  templateUrl: './contract-add-review.component.html',
  styleUrls: ['./contract-add-review.component.scss']
})
export class ContractAddReviewComponent implements OnInit {

  public get state(): ContractAddReviewModel {
    return this._stateService.state;
  }

  constructor(
    private _stateService: ContractAddReviewStateService,
    private _navigator: NavigatorService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.params['id'];
    this._stateService.initState(new ContractAddReviewModel(parseInt(id, 0)));
  }

  public addReview(): void {
    this._stateService.addReview().subscribe(res => {
      notify('Dodano recenzje', 'success');
      this._navigator.myContracts();
    });
  }
}
