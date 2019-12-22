import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class ApiServiceBase {

  protected baseUrl: string;

  protected constructor(
    private _httpClient: HttpClient
  ) {}

  // TODO params
  public get<TRequest, TResponse>(url: string, request?: TRequest): Observable<TResponse> {
    return this._httpClient.get<TResponse>(this._buildUrl(url));
  }

  public post<TRequest, TResponse>(url: string, request: TRequest): Observable<TResponse> {
    return this._httpClient.post<TResponse>(this._buildUrl(url), JSON.stringify(request));
  }

  public put<TRequest, TResponse>(url: string, request: TRequest): Observable<TResponse> {
    return this._httpClient.put<TResponse>(this._buildUrl(url), JSON.stringify(request));
  }

  // TODO params
  public delete<TRequest, TResponse>(url: string, request: TRequest): Observable<TResponse> {
    return this._httpClient.delete<TResponse>(this._buildUrl(url));
  }

  private _buildUrl(url: string): string {
    return `${this.baseUrl}/${url}`;
  }
}
