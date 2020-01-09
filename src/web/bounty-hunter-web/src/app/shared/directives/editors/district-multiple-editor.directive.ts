import {Directive, Inject} from '@angular/core';
import {EditorDirectiveBase} from './editor-directive.abstract';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../../services/resources-api.service';
import DataSource from "devextreme/data/data_source";
import CustomStore from "devextreme/data/custom_store";

@Directive({
  selector: 'dxi-item [bhDistrictMultipleEditor]'
})
export class DistrictMultipleEditorDirective extends EditorDirectiveBase {

  constructor(
    dxiItem: DxiItemComponent,
    @Inject('DistrictApiService') private _districtApiResourceService: ResourcesApiService
  ) {
    super(dxiItem);
  }

  public configureDxiItem(): void {
    this.dxItem.editorType = 'dxTagBox';
    this.dxItem.editorOptions = {
      displayExpr: 'name',
      valueExpr: 'id',
      dataSource: new DataSource({
        store: new CustomStore({
          load: (options) => this._districtApiResourceService.getAll().toPromise(),
          key: 'id',
          byKey: (key) => this._districtApiResourceService.getById(key).toPromise() 
        })
      })
    }
  }
}

