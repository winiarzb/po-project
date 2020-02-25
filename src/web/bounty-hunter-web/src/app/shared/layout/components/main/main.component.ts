import { Component, OnInit } from '@angular/core';
import {INavigationLink, NAVIGATION} from '../../../../../navigation';

@Component({
  selector: 'bh-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public links: ReadonlyArray<INavigationLink> = Object.freeze(NAVIGATION);

  constructor() { }

  ngOnInit() {
  }

}
