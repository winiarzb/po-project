import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: 'bh-card [bhCardHeader]'
})
export class CardHeaderDirective {

  constructor(
    public template: TemplateRef<void>
  ) { }

}
