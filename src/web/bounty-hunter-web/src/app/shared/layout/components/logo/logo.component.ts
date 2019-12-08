import { Component, OnInit } from '@angular/core';
import {NavigatorService} from "../../../services/navigator.service";

@Component({
  selector: 'bh-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(
    public navigator: NavigatorService
  ) { }

  ngOnInit() {
  }

}
