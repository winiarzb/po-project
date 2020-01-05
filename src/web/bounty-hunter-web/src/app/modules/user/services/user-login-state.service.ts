import { Injectable } from '@angular/core';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {AuthApiService} from './auth-api.service';
import {AuthRequestFactoryService} from './auth-request-factory.service';
import {UserSignInModel} from '../models/user-sign-in.model';
import {Observable} from 'rxjs';
import {IUserSignInResponse} from '../interfaces/user-sign-in-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserLoginStateService extends StateServiceBase<UserSignInModel> {

  constructor(
    authService: AuthApiService,
    requestService: AuthRequestFactoryService
  ) {
    super(authService, requestService);
  }

  public signUp(): Observable<IUserSignInResponse> {
    const request = (this.requestService as AuthRequestFactoryService).getSignInRequest(this.state);
    const observable = (this.apiService as AuthApiService).signIn(request);
    return this.asyncTask(observable);
  }
}
