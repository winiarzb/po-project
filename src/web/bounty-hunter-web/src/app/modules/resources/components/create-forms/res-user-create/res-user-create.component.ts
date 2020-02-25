import {Component, Inject, OnInit, Optional} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Contract} from '../../../../../shared/models/contract.model';
import {UserAccountCreateRequest} from '../../../models/user-account/user-account-create-request.model';
import {ResourceCreateComponentBase} from '../resource-create-component.abstract';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-user-create',
  templateUrl: './res-user-create.component.html',
  styleUrls: ['./res-user-create.component.scss']
})

export class ResUserCreateComponent extends ResourceCreateComponentBase<UserAccountCreateRequest> {
  constructor(
    @Optional() @Inject('ResUserAccountStateService') stateService: ResourceStateService<UserAccountCreateRequest>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
