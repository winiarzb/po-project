import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RegistrationStateService} from '../../services/registration-state.service';
import {UserSignUpModel} from '../../models/user-sign-up.model';
import {DxFormComponent} from 'devextreme-angular';
import {Galaxy} from '../../../../shared/models/galaxy.model';
import DevExpress from 'devextreme';
import Editor = DevExpress.ui.Editor;
import notify from 'devextreme/ui/notify';
import {NavigatorService} from '../../../../shared/services/navigator.service';

@Component({
  selector: 'bh-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, AfterViewInit {

  @ViewChild(DxFormComponent, {static: false}) dxForm: DxFormComponent;

  public get state(): UserSignUpModel {
    return this._registrationState.state;
  }

  public get galaxyId(): number {
    return this._galaxyId;
  }


  private _planetsEditor: Editor;
  private _galaxyId: number;

  constructor(
    private _registrationState: RegistrationStateService,
    private _navigator: NavigatorService
  ) { }

  ngOnInit() {
    this._registrationState.initState(new UserSignUpModel());
  }

  ngAfterViewInit() {
    this._planetsEditor = this.dxForm.instance.getEditor('planets');
    this._planetsEditor.option('disabled', true);

    this.dxForm.onFieldDataChanged.subscribe(res => {
      if (res.dataField === 'galaxy') {
        this.onGalaxyChange(res.value);
      }
    });
  }

  public onSignUp(): void {
    this._registrationState.signUp().subscribe(() => {
      notify('Konto utworzone! Możesz się zalogować :)', 'success');
      this._navigator.login();
    });
  }

  public onGalaxyChange(galaxy: Galaxy): void {
    this._planetsEditor.reset();
    this._planetsEditor.option('disabled', !galaxy);
    this._galaxyId = galaxy.id;
  }
}
