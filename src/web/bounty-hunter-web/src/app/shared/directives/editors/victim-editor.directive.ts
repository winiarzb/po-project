import {Directive, Inject} from '@angular/core';
import {EditorDirectiveBase} from './editor-directive.abstract';
import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {ResourcesApiService} from '../../services/resources-api.service';
import DataSource from "devextreme/data/data_source";
import CustomStore from "devextreme/data/custom_store";
import {Victim} from '../../models/victim.model';

@Directive({
  selector: 'dxi-item [bhVictimEditor]'
})
export class VictimEditorDirective extends EditorDirectiveBase {

  constructor(
    dxiItem: DxiItemComponent,
    @Inject('VictimApiService') private _victimApiResourceService: ResourcesApiService<Victim>
  ) {
    super(dxiItem);
  }


  public configureDxiItem(): void {
    this.dxItem.editorType = 'dxSelectBox';
    this.dxItem.editorOptions = {
      displayExpr: 'name', // jak z backendu przychodzi obiekt victim to to pole mówi który proper ma być wyświetlany w kontrolce, czyli nazwa np. Vader przychodzi w polu name
      valueExpr: 'id', // tutaj mówi jakie pole ma zwarać, czyli jak wybierzesz Vader i jego obiekt to {name: 'Vader', id: 1} to wybierasz id. Usuniecie tego spowoduje ze bedzie zwracayn caly obiekt
      dataSource: new DataSource({
        store: new CustomStore({
          load: (options) => this._victimApiResourceService.getAll().toPromise(), // jak selectbox szukal danych to bedzie strzelal do tej metody
          key: 'id', // tutaj trzeba podac klucz po ktorym bedzie wiadomo co jest czym  (zazwyczaj id)
          byKey: (key) => this._victimApiResourceService.getById(key).toPromise() // to chyba nie jest potrzebne
        })
      })
    }
  }
}
