import { Injectable } from '@angular/core';
import {RequestFactoryServiceBase} from '../../../shared/services/request-factory-service.abstract';
import {UserSignUpModel} from '../models/user-sign-up.model';
import {UserSignInModel} from '../models/user-sign-in.model';
import {UserSignInRequest} from '../models/user-sign-in-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthRequestFactoryService extends RequestFactoryServiceBase {

  constructor() {
    super();
  }

  public getSignUpRequest(): UserSignUpModel {
    return new UserSignUpModel();
  }

  public getSignInRequest(userModel: UserSignInModel): UserSignInRequest {
    const request = new UserSignInRequest();
    request.password = userModel.password;
    request.username = userModel.username;
    return request;
  }
}
