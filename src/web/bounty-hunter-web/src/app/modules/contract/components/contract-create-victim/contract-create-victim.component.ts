import {Component, ViewChild} from '@angular/core';
import {ResVictimCreateComponent} from '../../../resources/components/create-forms/res-victim-create/res-victim-create.component';
import notify from 'devextreme/ui/notify';
import {NavigatorService} from '../../../../shared/services/navigator.service';

@Component({
  selector: 'bh-contract-create-victim',
  templateUrl: './contract-create-victim.component.html',
  styleUrls: ['./contract-create-victim.component.scss']
})
export class ContractCreateVictimComponent  {
  @ViewChild(ResVictimCreateComponent, {static: false}) form: ResVictimCreateComponent

  constructor(
    private _navigator: NavigatorService
  ) {}

  public addVictim(): void {
    this.form.saveChanges().subscribe(res => {
      notify('Dodano ofiarę', 'success');
      this._navigator.createContract();
    });
  }
}
