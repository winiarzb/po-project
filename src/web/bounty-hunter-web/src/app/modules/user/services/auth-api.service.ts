import { Injectable } from '@angular/core';
import {ApiServiceBase} from '../../../shared/services/api-service.abstract';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../shared/models/user.model';
import {UserSignUpModel} from '../models/user-sign-up.model';
import {UserSignInRequest} from '../models/user-sign-in-request.model';
import {IUserSignInResponse} from '../interfaces/user-sign-in-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends ApiServiceBase {

  constructor(
    httpClient: HttpClient
  ) {
    super(httpClient, 'auth');
  }

  public signIn(request: UserSignInRequest): Observable<IUserSignInResponse> {
    return this.post<UserSignInRequest, IUserSignInResponse>('signin', request);
  }

  public signUp(request: UserSignUpModel): Observable<User> {
    return this.post<UserSignUpModel, User>('signup', request);
  }
}
