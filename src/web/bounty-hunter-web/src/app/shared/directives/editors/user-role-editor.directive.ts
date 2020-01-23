import {Directive, Inject, Input} from '@angular/core';
import {EditorDirectiveBase} from './editor-directive.abstract';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../../services/resources-api.service';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import {Role} from '../../models/role.model';

@Directive({
  selector: 'dxi-item [bhUserRoleEditor]'
})
export class UserRoleEditorDirective extends EditorDirectiveBase {

  @Input() returnOnlyName: boolean = false;

  constructor(
    item: DxiItemComponent,
    @Inject('RoleApiService') private _roleApiService: ResourcesApiService<Role>
  ) {
    super(item);
  }

  public configureDxiItem(): void {
    this.dxItem.label = {
      text: 'Rola'
    };
    this.dxItem.editorType = 'dxSelectBox';
    this.dxItem.editorOptions = {
      displayExpr: 'roleName',
      dataSource: new DataSource({
        store: new CustomStore({
          load: (options) => this._roleApiService.getAll().toPromise(),
          byKey: (key) => this._roleApiService.getById(key).toPromise(),
          key: 'id'
        })
      }),
      valueExpr: this.returnOnlyName ? 'roleName' : null
    }
  }
}
