import { Injectable } from '@angular/core';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {AuthApiService} from './auth-api.service';
import {AuthRequestFactoryService} from './auth-request-factory.service';
import {UserSignInModel} from '../models/user-sign-in.model';
import {Observable} from 'rxjs';
import {UserStateService} from './user-state.service';
import {flatMap, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserLoginStateService extends StateServiceBase<UserSignInModel> {

  constructor(
    authService: AuthApiService,
    requestService: AuthRequestFactoryService,
    private _userService: UserStateService
  ) {
    super(authService, requestService);
  }

  public signUp(): Observable<void> {
    const request = (this.requestService as AuthRequestFactoryService).getSignInRequest(this.state);
    const observable = (this.apiService as AuthApiService).signIn(request)
      .pipe(
        tap(res => this._userService.initStateFromResponse(res)),
        map(res => null)
      );
    return this.asyncTask(observable);
  }
}
