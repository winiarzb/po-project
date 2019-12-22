import { Injectable } from '@angular/core';
import {ApiServiceBase} from '../../../shared/services/api-service.abstract';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VictimApiService extends ApiServiceBase {
  constructor(
    httpClient: HttpClient
  ) {
    super(httpClient);
  }
}
