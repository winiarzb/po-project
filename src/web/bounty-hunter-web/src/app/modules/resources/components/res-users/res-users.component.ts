import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {User} from '../../../../shared/models/user.model';

@Component({
  selector: 'bh-res-users',
  templateUrl: './res-users.component.html',
  styleUrls: ['./res-users.component.scss']
})
export class ResUsersComponent implements OnInit {

  constructor(
    @Inject('ResUserAccountStateService') private _state: ResourceStateService<User[]>
  ) { }

  ngOnInit() {
  }

}
