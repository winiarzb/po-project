import {Directive, Inject, OnInit} from '@angular/core';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../../services/resources-api.service';
import {DictionaryModel} from '../../models/dictionary.model';
import {DictionaryType} from '../../enums/dictionary-type.enum';
import {EditorDirectiveBase} from './editor-directive.abstract';

@Directive({
  selector: 'dxi-item [bhPriorityFormEditor]'
})
export class PriorityFormEditorDirective extends EditorDirectiveBase implements OnInit {

  constructor(
    _dxiItem: DxiItemComponent,
  @Inject('DictionaryApiService') private _dictionaryApiService: ResourcesApiService<DictionaryModel>
  ) {
    super(_dxiItem);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this._addItems();
  }

  public configureDxiItem(): void {
    this.dxItem.dataField = 'priority';
    this.dxItem.editorType = 'dxSelectBox';
    this.dxItem.label = {
      text: 'Priorytet'
    };
  }

  private _addItems(): void {
    this._dictionaryApiService.getAll<DictionaryModel[]>().subscribe(res => {
      const priorities = res.filter(dict => dict.type === DictionaryType.Priority)
        .map(priority => priority.value);

      this.dxItem.editorOptions = {
        items: priorities
      }
    })
  }
}

