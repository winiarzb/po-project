import {Directive, Inject, OnInit} from '@angular/core';
import {EditorDirectiveBase} from './editor-directive.abstract';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../../services/resources-api.service';
import {DictionaryModel} from '../../models/dictionary.model';
import {DictionaryType} from '../../enums/dictionary-type.enum';

@Directive({
  selector: 'dxi-item [bhPlanetTypeEditor]'
})
export class PlanetTypeEditorDirective extends EditorDirectiveBase implements OnInit {

  constructor(
    item: DxiItemComponent,
    @Inject('DictionaryApiService') private _dictionaryApiService: ResourcesApiService<DictionaryModel>
  ) {
    super(item);
  }

  ngOnInit() {
    super.ngOnInit();
    this._addItems();
  }

  public configureDxiItem(): void {
    this.dxItem.label = {
      text: 'Typ planety'
    };
    this.dxItem.editorType = 'dxSelectBox';
    this.dxItem.dataField = 'planetType';
  }

  private _addItems(): void {
    this._dictionaryApiService.getAll<DictionaryModel[]>().subscribe(dictionaries => {
      const planetsType = dictionaries
        .filter(dictionary => dictionary.type === DictionaryType.PlanetType)
        .map(dictionary => dictionary.value);

      this.dxItem.editorOptions = {
        items: planetsType
      };
    });
  }
}
