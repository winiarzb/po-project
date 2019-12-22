import {ApiServiceBase} from '../../../shared/services/api-service.abstract';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class ResourcesApiService extends ApiServiceBase {
  constructor(
    httpClient: HttpClient,
    controller: string
  ) {
    super(httpClient, controller);
  }

  public getById<TResponse>(id: string): Observable<TResponse> {
    return super.get(id);
  }

  public getAll<TRequest, TResponse>(): Observable<TResponse> {
    return super.get('all');
  }

  public create<TRequest, TResponse>(request: TRequest): Observable<TResponse> {
    return super.post<TRequest, TResponse>('', request);
  }

  public update<TRequest, TResponse>(request: TRequest): Observable<TResponse> {
    return super.put<TRequest, TResponse>('', request);
  }

  public delete<TResponse>(id: string): Observable<TResponse> {
    return super.delete(id);
  }
}
