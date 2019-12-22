import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class ApiServiceBase {

  private readonly baseUrl: string;

  protected constructor(
    private readonly _httpClient: HttpClient,
    private readonly _controller: string
  ) {}

  public get<TResponse>(url: string, params?: HttpParams): Observable<TResponse> {
    return this._httpClient.get<TResponse>(this._buildUrl(url), {params});
  }

  public post<TRequest, TResponse>(url: string, request: TRequest): Observable<TResponse> {
    return this._httpClient.post<TResponse>(this._buildUrl(url), JSON.stringify(request));
  }

  public put<TRequest, TResponse>(url: string, request: TRequest): Observable<TResponse> {
    return this._httpClient.put<TResponse>(this._buildUrl(url), JSON.stringify(request));
  }

  public delete<TResponse>(url: string, params?: HttpParams): Observable<TResponse> {
    return this._httpClient.delete<TResponse>(this._buildUrl(url), {params});
  }

  private _buildUrl(url: string): string {
    return `${this.baseUrl}/${this._controller}/${url}`;
  }
}
