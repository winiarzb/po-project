import {Directive, Inject, OnInit} from '@angular/core';
import {EditorDirectiveBase} from './editor-directive.abstract';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../../services/resources-api.service';
import {DictionaryModel} from '../../models/dictionary.model';

@Directive({
  selector: 'dxi-item [bhDictionaryTypeEditor]'
})
export class DictionaryTypeEditorDirective extends EditorDirectiveBase implements OnInit {

  constructor(
    _dxiItem: DxiItemComponent,
    @Inject('DictionaryApiService') private _dictionaryApiService: ResourcesApiService
  ) {
    super(_dxiItem)
  }

  ngOnInit() {
    this._configureDxItem();
    this._addItems();
  }

  private _configureDxItem(): void {
    this.dxItem.dataField = 'type';
    this.dxItem.editorType = 'dxSelectBox';
    this.dxItem.label = {
      text: 'Typ'
    }
  }

  private _addItems(): void {
    this._dictionaryApiService.getAll<DictionaryModel[]>().subscribe(dictionaries => {
      const dictionaryTypes = new Set<string>();
      dictionaries.forEach(dictionary => dictionaryTypes.add(dictionary.type));
      this.dxItem.editorOptions = {
        items: Array.from(dictionaryTypes.values())
      };
    });
  }
}
