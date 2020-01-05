import { Injectable } from '@angular/core';
import {IUserSignInResponse} from '../../modules/user/interfaces/user-sign-in-response.interface';
import {isDefined} from '../utils/is-defined';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _token: string;
  private _isLogged: boolean;

  public get isLogged(): boolean {
    return this._isLogged;
  }

  public get token(): string {
    return this._token;
  }

  constructor(
  ) {
    this.getTokenFromStorage();
  }

  public signIn(model: IUserSignInResponse): void {
    this._token = model.jwt;
    this._isLogged = true;

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this._token);
    const expirationDate = helper.getTokenExpirationDate(this._token);
    const isExpired = helper.isTokenExpired(this._token);

    console.log(decodedToken);
    console.log(expirationDate);
    console.log(isExpired);

    localStorage.setItem('token', this._token);
  }

  public logout(): void {
    this._token = null;
    this._isLogged = false;
    localStorage.removeItem('token');
  }

  public getTokenFromStorage(): void {
    this._token = localStorage.getItem('token');
    this._isLogged = isDefined(this._token);
  }
}
