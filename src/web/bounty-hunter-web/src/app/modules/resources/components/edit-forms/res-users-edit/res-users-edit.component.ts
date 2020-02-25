import {Component, Inject, OnInit, Optional} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Contract} from '../../../../../shared/models/contract.model';
import {User} from '../../../../../shared/models/user.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-users-edit',
  templateUrl: './res-users-edit.component.html',
  styleUrls: ['./res-users-edit.component.scss']
})
export class ResUsersEditComponent extends ResourceEditComponentBase<User> {
  constructor(
    @Optional() @Inject('ResUserAccountStateService') stateService: ResourceStateService<User>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }
}
