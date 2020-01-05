import { Component, OnInit } from '@angular/core';
import {UserLoginStateService} from '../../services/user-login-state.service';
import {UserSignInModel} from '../../models/user-sign-in.model';
import notify from 'devextreme/ui/notify';
import {UserService} from '../../../../shared/services/user.service';
import {NavigatorService} from '../../../../shared/services/navigator.service';

@Component({
  selector: 'bh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public get state(): UserSignInModel {
    return this._loginState.state;
  }

  constructor(
    private _loginState: UserLoginStateService,
    private _userService: UserService,
    private _navigator: NavigatorService
  ) { }

  public ngOnInit() {
    this._loginState.initState(new UserSignInModel());
  }

  public onSignIn(): void {
    this._loginState.signUp().subscribe(res => {
      notify('Zalogowano', 'success');
      this._userService.signIn(res);
      this._navigator.dashboard();
    }, err => this._handleLoginError(err));
  }

  private _handleLoginError(err: {status: number}): void {
    const message = err.status === 401 ? 'Nieprawidłowa nazwa użytkownika lub hasło' : 'Sprawdź czy jesteś online';
    notify(message, 'error');
  }
}
