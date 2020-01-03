import {Directive, Inject} from '@angular/core';
import {EditorDirectiveBase} from './editor-directive.abstract';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../../services/resources-api.service';
import {DictionaryModel} from '../../models/dictionary.model';
import {DictionaryType} from '../../enums/dictionary-type.enum';

@Directive({
  selector: 'dxi-item [bhUserRoleEditor]'
})
export class UserRoleEditorDirective extends EditorDirectiveBase {

  constructor(
    item: DxiItemComponent,
    @Inject('DictionaryApiService') private _dictionaryApiService: ResourcesApiService
  ) {
    super(item);
  }

  ngOnInit() {
    super.ngOnInit();
    this._addItems();
  }

  public configureDxiItem(): void {
    this.dxItem.label = {
      text: 'Rola'
    };
    this.dxItem.editorType = 'dxSelectBox';
    this.dxItem.dataField = 'userRole';
  }

  private _addItems(): void {
    this._dictionaryApiService.getAll<DictionaryModel[]>().subscribe(dictionaries => {
      const roles = dictionaries
        .filter(dictionary => dictionary.type === DictionaryType.UserRole)
        .map(dictionary => dictionary.value);
      this.dxItem.editorOptions = {
        items: roles
      }
    });
  }
}
