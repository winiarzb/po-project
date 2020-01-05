import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {NavigatorService} from "../../../services/navigator.service";

@Component({
  selector: 'bh-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public get isLogged(): boolean {
    return this._userService.isLogged;
  }

  constructor(
    private _userService: UserService,
    private _navigator: NavigatorService
  ) { }

  ngOnInit() {
  }

  public logout(): void {
    this._userService.logout();
    this._navigator.login();
  }
}
