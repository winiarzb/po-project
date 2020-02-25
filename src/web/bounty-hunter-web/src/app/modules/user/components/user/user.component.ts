import { Component } from '@angular/core';
import {UserStateService} from '../../services/user-state.service';
import {UserLogged} from '../../models/user-logged.model';
import {Location} from '@angular/common';

@Component({
  selector: 'bh-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  public get state(): UserLogged {
    return this._userState.state;
  }

  constructor(
    private _userState: UserStateService,
    private _location: Location
  ) { }

  public goBack(): void {
    this._location.back();
  }
}
