import {DxiItemComponent} from 'devextreme-angular/ui/nested';
import {OnInit} from '@angular/core';

export abstract class EditorDirectiveBase implements OnInit {
  protected constructor(
    protected dxItem: DxiItemComponent
  ) {}

  public abstract configureDxiItem(): void;

  ngOnInit(): void {
    this.configureDxiItem();
  }
}
