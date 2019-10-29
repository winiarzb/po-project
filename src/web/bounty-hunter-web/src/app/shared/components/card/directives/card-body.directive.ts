import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: 'bh-card [bhCardBody]'
})
export class CardBodyDirective {

  constructor(
    public template: TemplateRef<void>
  ) { }

}
