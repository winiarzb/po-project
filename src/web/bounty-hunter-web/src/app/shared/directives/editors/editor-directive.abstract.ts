import {DxiItemComponent} from 'devextreme-angular/ui/nested';

export abstract class EditorDirectiveBase {
  protected constructor(
    protected dxItem: DxiItemComponent
  ) {}
}
