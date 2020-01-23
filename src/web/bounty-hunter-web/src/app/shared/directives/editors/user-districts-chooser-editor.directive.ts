import {Directive, Inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {EditorDirectiveBase} from './editor-directive.abstract';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import {ResourcesApiService} from '../../services/resources-api.service';
import {PlanetResourceApiServiceService} from '../../../modules/resources/services/custom-api-services/planet-resource-api-service.service';

@Directive({
  selector: 'dxi-item [bhUserDistrictsChooserEditor]'
})
export class UserDistrictsChooserEditorDirective extends EditorDirectiveBase implements OnChanges {

  @Input() galaxyId: number;

  constructor(
    dxiItem: DxiItemComponent,
    @Inject('PlanetApiService') private _planetApiResourceService: PlanetResourceApiServiceService
  ) {
    super(dxiItem);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['galaxyId'].firstChange) {
      this.refreshDataSource();
    }
  }

  public configureDxiItem(): void {
    this.dxItem.editorType = 'dxTagBox';
    this.dxItem.dataField = 'planets';
    this.dxItem.label = {
      text: 'Planety'
    },
    this.dxItem.editorOptions = {
      selectionMode: 'multiple',
      showSelectionControls: true,
      displayExpr: 'name',
      dataSource: new DataSource({
        store: new CustomStore({
          load: (options) => this._planetApiResourceService.getByGalaxyId(this.galaxyId).toPromise(),
          key: 'id',
          byKey: (key) => this._planetApiResourceService.getById(key).toPromise()
        })
      })
    }
  }

  public refreshDataSource(): void {
    const dataSource = this.dxItem.editorOptions.dataSource as DataSource;
    dataSource.load();
  }
}
