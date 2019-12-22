import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ApiServiceBase} from './api-service.abstract';
import {RequestFactoryServiceBase} from './request-factory-service.abstract';

export abstract class StateServiceBase<TState> {

  public get isLoading(): boolean {
    return this._isLoading && this.isInitialized;
  }

  public get isInitialized(): boolean {
    return this._state !== null;
  }

  public get state(): TState {
    return this._state;
  }

  private _state: TState = null;
  private _isLoading: boolean = false;

  protected constructor(
    protected apiService: ApiServiceBase,
    protected requestService: RequestFactoryServiceBase
  ) {}

  public initState(state: TState): void {
    this._state = state;
  }

  public clearState(state: TState): void {
    this._state = null;
  }

  public asyncTask<TResult>(observable: Observable<TResult>): Observable<TResult> {
    this._isLoading = true;
    return observable.pipe(
      tap(() => this._isLoading = false)
    );
  }
}
