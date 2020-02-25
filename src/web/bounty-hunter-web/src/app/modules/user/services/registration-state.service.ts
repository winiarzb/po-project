import {Injectable} from '@angular/core';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {UserSignUpModel} from '../models/user-sign-up.model';
import {AuthApiService} from './auth-api.service';
import {AuthRequestFactoryService} from './auth-request-factory.service';
import {Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationStateService extends StateServiceBase<UserSignUpModel> {

  constructor(
    authService: AuthApiService,
    requestService: AuthRequestFactoryService
  ) {
    super(authService, requestService);
  }

  public signUp(): Observable<void> {
    const request = (this.requestService as AuthRequestFactoryService).getSignUpRequest(this.state);
    return (this.apiService as AuthApiService).signUp(request)
      .pipe(
        map(() => null)
      );
  }
}
