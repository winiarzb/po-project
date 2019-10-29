import { Component, OnInit } from '@angular/core';
import {INavigationLink, NAVIGATION} from "../../../../../navigation";

@Component({
  selector: 'bh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public links: ReadonlyArray<INavigationLink> = Object.freeze(NAVIGATION);

  constructor() { }

  ngOnInit() {
  }

}
