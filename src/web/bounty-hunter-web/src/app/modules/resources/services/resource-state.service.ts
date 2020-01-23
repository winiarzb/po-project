import { Injectable } from '@angular/core';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {RequestFactoryServiceBase} from '../../../shared/services/request-factory-service.abstract';
import {ResourcesApiService} from '../../../shared/services/resources-api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceStateService<TState> extends StateServiceBase<TState> {

  stateEmpty : TState;
  constructor(
    apiService: ResourcesApiService<TState>,
    requestFactoryService: RequestFactoryServiceBase
  ) {
    super(apiService, requestFactoryService);
  }

  public initStateFromResponse(): void {
    const apiService = this.apiService as ResourcesApiService<TState>;
    apiService.getAll<TState>().subscribe(res => {
      this.initState(res);
    });
  }

  public initStateById(id: number): void {
    const apiService = this.apiService as ResourcesApiService<TState>;
    apiService.getById<TState>(id).subscribe(res => {
      this.initState(res);
    })
  }

  public initEmptyState(): void {
    this.stateEmpty = {} as any;
      this.initState(this.stateEmpty);
  }

  public update(): Observable<TState> {
    return (this.apiService as ResourcesApiService<TState>).update(this.state);
  }

  public create(): Observable<TState> {
    return (this.apiService as ResourcesApiService<TState>).create(this.state);
  }
}
