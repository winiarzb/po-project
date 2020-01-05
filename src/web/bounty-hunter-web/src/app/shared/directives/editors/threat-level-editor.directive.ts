import {Directive, Inject} from '@angular/core';
import {EditorDirectiveBase} from './editor-directive.abstract';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../../services/resources-api.service';
import {DictionaryModel} from '../../models/dictionary.model';
import {DictionaryType} from '../../enums/dictionary-type.enum';

@Directive({
  selector: 'dxi-item [bhThreatLevelEditor]'
})
export class ThreatLevelEditorDirective extends EditorDirectiveBase {

  constructor(
    dxiItem: DxiItemComponent,
    @Inject('DictionaryApiService') private _dictionaryApiService: ResourcesApiService
  ) {
    super(dxiItem)
  }

  ngOnInit(): void {
    super.ngOnInit();
    this._addItems();
  }

  public configureDxiItem(): void {
    this.dxItem.label = {
      text: 'Poziom zagrożenia'
    };
    this.dxItem.editorType = 'dxSelectBox';
    this.dxItem.dataField = 'threatLevel';
  }

  private _addItems(): void {
    this._dictionaryApiService.getAll<DictionaryModel[]>().subscribe(dictionaries => {
      const threatLevels = dictionaries
        .filter(dictionary => dictionary.type === DictionaryType.ThreatLevel)
        .map(dictionary => dictionary.value);
      this.dxItem.editorOptions = {
        items: threatLevels
      };
    });
  }
}
