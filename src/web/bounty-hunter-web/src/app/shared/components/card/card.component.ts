import {Component, ContentChild, Input} from '@angular/core';
import {CardHeaderDirective} from "./directives/card-header.directive";

@Component({
  selector: 'bh-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() header: string;
  @ContentChild(CardHeaderDirective, {static: false}) headerTemplate: CardHeaderDirective
}
