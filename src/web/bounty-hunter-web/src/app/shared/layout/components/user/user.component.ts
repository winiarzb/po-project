import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {NavigatorService} from "../../../services/navigator.service";

@Component({
  selector: 'bh-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  public get isLogged(): boolean {
    return this._userService.isLogged;
  }

  constructor(
    private _userService: UserService,
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
