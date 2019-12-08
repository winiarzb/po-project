import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[bhButton]'
})
export class ButtonDirective {

  @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() outline: boolean = false;

  @HostBinding('class.bh-button') defaultButton: boolean = true;

  @HostBinding('class.primary')
  public get isPrimary(): boolean {
    return this.color === 'primary';
  }

  @HostBinding('class.secondary')
  public get isSecondary(): boolean {
    return this.color === 'secondary';
  }

  @HostBinding('class.outline')
  public get isOutlined(): boolean {
    return this.outline;
  }
}
