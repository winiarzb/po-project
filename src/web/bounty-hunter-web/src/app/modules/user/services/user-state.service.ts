import {Inject, Injectable} from '@angular/core';
import {IUserSignInResponse} from '../interfaces/user-sign-in-response.interface';
import {isDefined} from '../../../shared/utils/is-defined';
import { JwtHelperService } from '@auth0/angular-jwt';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {UserLogged} from '../models/user-logged.model';

const USER_STORAGE_TOKEN = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserStateService extends StateServiceBase<UserLogged> {

  private readonly jwtHelper: JwtHelperService = new JwtHelperService();
  private _isLogged: boolean;

  public get isLogged(): boolean {
    return this._isLogged;
  }

  constructor() {
    super();
  }

  public initStateFromResponse(model: IUserSignInResponse): void {
    this.initState(new UserLogged(model.jwt, model.user));
    this._isLogged = true;
    this._saveToLocalStorage();
  }

  public initStateFromLocalStorage(): void {
    const user = this._getFromLocalStorage();

    if (isDefined(user) && !this.jwtHelper.isTokenExpired(user.token)) {
      this._isLogged = true;
      this.initState(user);
    } else {
      this.logout();
    }
  }

  public logout(): void {
    this._clearLocalStorage();
    this.clearState();
    this._isLogged = false;
  }

  private _getFromLocalStorage(): UserLogged {
    const stringifyUser = localStorage.getItem(USER_STORAGE_TOKEN);
    return JSON.parse(stringifyUser);
  }

  private _saveToLocalStorage(): void {
    localStorage.setItem(USER_STORAGE_TOKEN, JSON.stringify(this.state));
  }

  private _clearLocalStorage(): void {
    localStorage.removeItem(USER_STORAGE_TOKEN);
  }
}
