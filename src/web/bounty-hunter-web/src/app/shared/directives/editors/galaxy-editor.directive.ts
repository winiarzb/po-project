import {Directive, Inject, Input} from '@angular/core';
import {EditorDirectiveBase} from './editor-directive.abstract';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../../services/resources-api.service';
import DataSource from "devextreme/data/data_source";
import CustomStore from "devextreme/data/custom_store";

@Directive({
  selector: 'dxi-item [bhGalaxyEditor]'
})
export class GalaxyEditorDirective extends EditorDirectiveBase {

  @Input() valueExpr: string = 'id';

  constructor(
    dxiItem: DxiItemComponent,
    @Inject('GalaxyApiService') private _galaxyApiResourceService: ResourcesApiService
  ) {
    super(dxiItem);
  }

  public configureDxiItem(): void {
    this.dxItem.editorType = 'dxSelectBox';
    this.dxItem.editorOptions = {
      displayExpr: 'name',
      valueExpr: this.valueExpr,
      dataSource: new DataSource({
        store: new CustomStore({
          load: (options) => this._galaxyApiResourceService.getAll().toPromise(),
          key: 'id',
          byKey: (key) => this._galaxyApiResourceService.getById(key).toPromise()
        })
      })
    }
  }
}

