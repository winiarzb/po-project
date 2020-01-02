import { Component, OnInit } from '@angular/core';
import {ResourceEditComponentBase} from '../edit-forms/resource-edit-component.abstract';
import {IIdentifiable} from '../../../../shared/interfaces/identifiable.interface';
import {isDefined} from '../../../../shared/utils/is-defined';

@Component({
  selector: 'bh-edit-form-wrapper',
  templateUrl: './edit-form-wrapper.component.html',
  styleUrls: ['./edit-form-wrapper.component.scss']
})
export class EditFormWrapperComponent {

  private _activatedForm: ResourceEditComponentBase<IIdentifiable>

  public save(): void {
    this._activatedForm.saveChanges();
  }

  public onFormActivation(form: ResourceEditComponentBase<IIdentifiable>): void {
    this._activatedForm = form;
  }

  public isSaveActive(): boolean {
    return isDefined(this._activatedForm) && this._activatedForm.isInitialized();
  }
}
