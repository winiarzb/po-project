import {OnInit} from '@angular/core';
import {ResourceStateService} from '../services/resource-state.service';

export class ResourceEditComponentBase<TModel> implements OnInit {

  public get state(): TModel {
    return this.serviceState.state;
  }

  constructor(
    protected serviceState: ResourceStateService<TModel>
  ) {}

  public ngOnInit() {
    this.serviceState.initStateFromResponse();
  }
}
