import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../../../../shared/models/user.model';
import {ResourceListComponentBase} from '../../resource-list-component.abstract';
import {ResourceStateService} from '../../../services/resource-state.service';



@Component({
  selector: 'bh-res-users',
  templateUrl: './res-users.component.html',
  styleUrls: ['./res-users.component.scss']
})
export class ResUsersComponent extends ResourceListComponentBase<User[]> {

  constructor(
    @Inject('ResUserAccountStateService') stateService: ResourceStateService<User[]>
  ) {
    super(stateService);
  }
}
