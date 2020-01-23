import {Directive, Inject, OnInit} from '@angular/core';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../../services/resources-api.service';
import {DictionaryModel} from '../../models/dictionary.model';
import {DictionaryType} from '../../enums/dictionary-type.enum';
import {EditorDirectiveBase} from './editor-directive.abstract';


@Directive({
  selector: 'dxi-item [bhContractStatusEditor]'
})
export class ContractStatusEditorDirective extends EditorDirectiveBase implements OnInit {

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
    this.dxItem.dataField = 'contractStatus';
    this.dxItem.editorType = 'dxSelectBox';
    this.dxItem.label = {
      text: 'Status'
    };
  }

  private _addItems(): void {
    this._dictionaryApiService.getAll<DictionaryModel[]>().subscribe(res => {
      const status = res.filter(dict => dict.type === DictionaryType.ContractStatus)
        .map(priority => priority.value);

      this.dxItem.editorOptions = {
        items: status
      }
    })
  }
}
