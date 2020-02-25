import { Component } from '@angular/core';
import {ResourceEditComponentBase} from '../edit-forms/resource-edit-component.abstract';
import {IIdentifiable} from '../../../../shared/interfaces/identifiable.interface';
import {isDefined} from '../../../../shared/utils/is-defined';
import {Location} from '@angular/common';

@Component({
  selector: 'bh-edit-form-wrapper',
  templateUrl: './edit-form-wrapper.component.html',
  styleUrls: ['./edit-form-wrapper.component.scss']
})
export class EditFormWrapperComponent {

  private _activatedForm: ResourceEditComponentBase<IIdentifiable>

  constructor(
    private _location: Location
  ) {
  }


  public save(): void {
    this._activatedForm.saveChanges().subscribe(res => {
      this.goBack();
    });
  }

  public onFormActivation(form: ResourceEditComponentBase<IIdentifiable>): void {
    this._activatedForm = form;
  }

  public isSaveActive(): boolean {
    return isDefined(this._activatedForm) && this._activatedForm.isInitialized();
  }

  public goBack(): void {
    this._location.back();
  }
}
