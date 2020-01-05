import {OnInit} from '@angular/core';
import {ResourceStateService} from '../services/resource-state.service';
import {IIdentifiable} from '../../../shared/interfaces/identifiable.interface';

export class ResourceListComponentBase<TModel> implements OnInit {
  public get state(): TModel {
    return this.serviceState.state;
  }

  public get selectedElement(): IIdentifiable {
    return this._selectedElement;
  }

  private _selectedElement: IIdentifiable;

  constructor(
    protected serviceState: ResourceStateService<TModel>
  ) {}

  public ngOnInit() {
    this.serviceState.initStateFromResponse();
  }

  public onSelect(element: {selectedRowsData: IIdentifiable[]}): void {
    this._selectedElement = element.selectedRowsData[0];
  }
}
