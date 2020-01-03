import {Directive, Inject, OnInit} from '@angular/core';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../services/resources-api.service';
import {DictionaryModel} from '../models/dictionary.model';
import {DictionaryType} from '../enums/dictionary-type.enum';

@Directive({
  selector: 'dxi-item [bhPriorityFormEditor]'
})
export class PriorityFormEditorDirective implements OnInit {

  constructor(
    private _item: DxiItemComponent,
  @Inject('DictionaryApiService') private _dictionaryApiService: ResourcesApiService
  ) { }

  ngOnInit(): void {
    this._configureDxItem();
    this._addItems();
  }

  private _configureDxItem(): void {
    this._item.dataField = 'priority';
    this._item.editorType = 'dxSelectBox';
    this._item.label = {
      text: 'Priorytet'
    };
  }

  private _addItems(): void {
    this._dictionaryApiService.getAll<DictionaryModel[]>().subscribe(res => {
      const priorities = res.filter(dict => dict.type === DictionaryType.Priority)
        .map(priority => priority.value);

      this._item.editorOptions = {
        items: priorities
      }
    })
  }
}

