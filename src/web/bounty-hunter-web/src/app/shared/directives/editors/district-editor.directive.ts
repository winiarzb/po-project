import {Directive, Inject} from '@angular/core';
import {EditorDirectiveBase} from './editor-directive.abstract';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../../services/resources-api.service';
import DataSource from "devextreme/data/data_source";
import CustomStore from "devextreme/data/custom_store";
import {District} from '../../models/district.model';

@Directive({
  selector: 'dxi-item [bhDistrictEditor]'
})
export class DistrictEditorDirective extends EditorDirectiveBase {

  constructor(
    dxiItem: DxiItemComponent,
    @Inject('DistrictApiService') private _districtApiResourceService: ResourcesApiService<District>
  ) {
    super(dxiItem);
  }

  public configureDxiItem(): void {
    this.dxItem.editorType = 'dxSelectBox';
    this.dxItem.editorOptions = {
      displayExpr: 'name',
      valueExpr: 'id',
      dataSource: new DataSource({
        store: new CustomStore({
          load: (options) => this._districtApiResourceService.getAll().toPromise(),
          byKey: (key) => this._districtApiResourceService.getById(key).toPromise(),
          key: 'id'
        })
      })
    }
  }
}

