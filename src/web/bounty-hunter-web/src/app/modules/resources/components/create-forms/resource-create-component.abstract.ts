import {ResourceStateService} from '../../services/resource-state.service';
import {ActivatedRoute} from '@angular/router';
import {OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export abstract class ResourceCreateComponentBase<TModel> implements OnInit {

  public get state(): TModel {
    return this.serviceState.state;
  }

  public isInitialized(): boolean {
    return this.serviceState.isInitialized;
  }

  protected constructor(
    protected serviceState: ResourceStateService<TModel>,
    private _activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit() {
      this.serviceState.initEmptyState();
  }

  public saveChanges(): Observable<TModel> {
    return this.serviceState.create();
  }
}
