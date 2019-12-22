import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ApiServiceBase} from './api-service.abstract';
import {RequestFactoryServiceBase} from './request-factory-service.abstract';

export abstract class StateServiceBase<TState> {

  public get isLoading(): boolean {
    return this._isLoading;
  }

  public state: TState;
  private _isLoading: boolean = false;

  protected constructor(
    private _apiService: ApiServiceBase,
    private _requestService: RequestFactoryServiceBase
  ) {}

  public asyncTask<TResult>(observable: Observable<TResult>): Observable<TResult> {
    this._isLoading = true;
    return observable.pipe(
      tap(() => this._isLoading = false)
    );
  }
}
