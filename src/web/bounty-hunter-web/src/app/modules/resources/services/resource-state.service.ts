import { Injectable } from '@angular/core';
import {StateServiceBase} from '../../../shared/services/state-service.abstract';
import {RequestFactoryServiceBase} from '../../../shared/services/request-factory-service.abstract';
import {ResourcesApiService} from '../../../shared/services/resources-api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceStateService<TState> extends StateServiceBase<TState> {

  constructor(
    apiService: ResourcesApiService,
    requestFactoryService: RequestFactoryServiceBase
  ) {
    super(apiService, requestFactoryService);
  }

  public initStateFromResponse(): void {
    const apiService = this.apiService as ResourcesApiService;
    apiService.getAll<TState>().subscribe(res => {
      this.initState(res);
    });
  }

  public initStateById(id: number): void {
    const apiService = this.apiService as ResourcesApiService;
    apiService.getById<TState>(id).subscribe(res => {
      this.initState(res);
    })
  }

  public update(): Observable<TState> {
    return (this.apiService as ResourcesApiService).update(this.state);
  }
}
