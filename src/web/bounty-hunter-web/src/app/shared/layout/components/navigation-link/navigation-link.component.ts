import {Component, Input} from '@angular/core';

@Component({
  selector: '[bh-navigation-link]',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent {

  @Input() name: string;
  @Input() url: string;
}
