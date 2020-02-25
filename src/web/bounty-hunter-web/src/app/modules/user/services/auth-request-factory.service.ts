import { Injectable } from '@angular/core';
import {RequestFactoryServiceBase} from '../../../shared/services/request-factory-service.abstract';
import {UserSignUpModel} from '../models/user-sign-up.model';
import {UserSignInModel} from '../models/user-sign-in.model';
import {UserSignInRequest} from '../models/user-sign-in-request.model';
import {UserSignUpRequest} from '../models/user-sign-up-request.model';
import {flatten} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthRequestFactoryService extends RequestFactoryServiceBase {

  constructor() {
    super();
  }

  public getSignUpRequest(userModel: UserSignUpModel): UserSignUpRequest {
    const request = new UserSignUpRequest();
    request.galaxy = userModel.galaxy;
    request.password = userModel.password;
    request.planets = userModel.planets;
    request.role = userModel.role;
    request.username = userModel.username;
    request.districts = flatten(userModel.planets.map(planet => planet.districts));

    return request;
  }

  public getSignInRequest(userModel: UserSignInModel): UserSignInRequest {
    const request = new UserSignInRequest();
    request.password = userModel.password;
    request.username = userModel.username;
    return request;
  }
}
