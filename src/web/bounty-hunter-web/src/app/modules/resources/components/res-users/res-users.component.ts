import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {User} from '../../../../shared/models/user.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';

@Component({
  selector: 'bh-res-users',
  templateUrl: './res-users.component.html',
  styleUrls: ['./res-users.component.scss']
})
export class ResUsersComponent extends ResourceEditComponentBase<User[]> {

  constructor(
    @Inject('ResUserAccountStateService') stateService: ResourceStateService<User[]>
  ) {
    super(stateService);
  }
}
