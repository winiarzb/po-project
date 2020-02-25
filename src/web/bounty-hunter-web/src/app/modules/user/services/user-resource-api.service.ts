import { Injectable } from '@angular/core';
import {ResourcesApiService} from '../../../shared/services/resources-api.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserResourceApiService extends ResourcesApiService<User[]> {
  constructor(
    httpClient: HttpClient,
  ) {
    super(httpClient, 'user');
  }

  public getByUsername(username: string): Observable<User> {
    return this.get<User>(username);
  }
}
