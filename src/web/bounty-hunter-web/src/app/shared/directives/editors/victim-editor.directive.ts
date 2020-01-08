import {Directive, Inject} from '@angular/core';
import {EditorDirectiveBase} from './editor-directive.abstract';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../../services/resources-api.service';
import DataSource from "devextreme/data/data_source";
import CustomStore from "devextreme/data/custom_store";

@Directive({
  selector: 'dxi-item [bhVictimEditor]'
})
export class VictimEditorDirective extends EditorDirectiveBase {

  constructor(
    dxiItem: DxiItemComponent,
    @Inject('VictimApiService') private _victimApiResourceService: ResourcesApiService
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
          load: (options) => this._victimApiResourceService.getAll().toPromise(),
          key: 'id',
          byKey: (key) => this._victimApiResourceService.getById(key).toPromise()
        })
      })
    }
  }
}
