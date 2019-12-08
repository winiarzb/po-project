import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[bhInput]'
})
export class InputDirective {

  @HostBinding('class.bh-input') default: boolean = true;

}
