import {Directive, Inject} from '@angular/core';
import {EditorDirectiveBase} from './editor-directive.abstract';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../../services/resources-api.service';
import DataSource from "devextreme/data/data_source";
import CustomStore from "devextreme/data/custom_store";
import {Planet} from '../../models/planet.model';

@Directive({
  selector: 'dxi-item [bhPlanetMultipleEditor]'
})
export class PlanetMultipleEditorDirective extends EditorDirectiveBase {

  constructor(
    dxiItem: DxiItemComponent,
    @Inject('PlanetApiService') private _planetApiResourceService: ResourcesApiService<Planet>
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
          load: (options) => this._planetApiResourceService.getAll().toPromise(),
          key: 'id',
          byKey: (key) => this._planetApiResourceService.getById(key).toPromise()
        })
      })
    }
  }
}
