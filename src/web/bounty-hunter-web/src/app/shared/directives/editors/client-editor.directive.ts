import {Directive, Inject} from '@angular/core';
import {EditorDirectiveBase} from './editor-directive.abstract';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import {UserResourceApiService} from '../../../modules/user/services/user-resource-api.service';
import {map} from 'rxjs/operators';
import {User} from '../../models/user.model';
import {UserRole} from '../../enums/user-role.enum';

@Directive({
  selector: 'dxi-item [bhClientEditor]'
})
export class ClientEditorDirective extends EditorDirectiveBase {

  constructor(
    dxiItem: DxiItemComponent,
    @Inject('UserAccountApiService') private _userAccountResService: UserResourceApiService
  ) {
    super(dxiItem);
  }

  public configureDxiItem(): void {
    this.dxItem.editorType = 'dxSelectBox';
    this.dxItem.label = {
      text: 'Klient'
    };
    this.dxItem.editorOptions = {
      displayExpr: 'name',
      valueExpr: 'id',
      dataSource: new DataSource({
        store: new CustomStore({
          load: (options) => this._userAccountResService.getAll<User[]>()
            .pipe(
              map(res => res.filter(user => user.role.roleName === UserRole.Client))
            )
            .toPromise(),
          key: 'id',
          byKey: (key) => this._userAccountResService.getById(key).toPromise()
        })
      })
    }
  }
}
