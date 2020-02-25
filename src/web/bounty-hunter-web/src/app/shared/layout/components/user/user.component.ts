import { Component, OnInit } from '@angular/core';
import {UserStateService} from "../../../../modules/user/services/user-state.service";
import {NavigatorService} from "../../../services/navigator.service";
import {UserLogged} from '../../../../modules/user/models/user-logged.model';

@Component({
  selector: 'bh-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  public get isLogged(): boolean {
    return this._userService.isLogged;
  }

  public get state(): UserLogged {
    return this._userService.state;
  }

  constructor(
    private _userService: UserStateService,
    private _navigator: NavigatorService
  ) { }

  public logout(): void {
    this._userService.logout();
    this._navigator.login();
  }

  public goToLogin(): void {
    this._navigator.login();
  }

  public goToRegistration(): void {
    this._navigator.registration();
  }
}
