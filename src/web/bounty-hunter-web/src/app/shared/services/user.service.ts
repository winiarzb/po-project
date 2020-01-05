import { Injectable } from '@angular/core';
import {IUserSignInResponse} from '../../modules/user/interfaces/user-sign-in-response.interface';
import {isDefined} from '../utils/is-defined';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly jwtHelper: JwtHelperService = new JwtHelperService();
  private readonly tokenStorage = 'token';
  private _token: string;
  private _isLogged: boolean;

  public get isLogged(): boolean {
    return this._isLogged;
  }

  public get token(): string {
    return this._token;
  }

  constructor() {
    this.getTokenFromStorage();
  }

  public signIn(model: IUserSignInResponse): void {
    this._token = model.jwt;
    this._isLogged = true;

    localStorage.setItem(this.tokenStorage, this._token);
  }

  public logout(): void {
    this._token = null;
    this._isLogged = false;
    localStorage.removeItem(this.tokenStorage);
  }

  public getTokenFromStorage(): void {
    const token = localStorage.getItem(this.tokenStorage);

    if (isDefined(token) && !this.jwtHelper.isTokenExpired(token)) {
      this._token = token;
      this._isLogged = true;
    }
  }
}
