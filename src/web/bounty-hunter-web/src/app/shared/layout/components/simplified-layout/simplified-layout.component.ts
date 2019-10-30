import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bh-simplified-layout',
  templateUrl: './simplified-layout.component.html',
  styleUrls: ['./simplified-layout.component.scss']
})
export class SimplifiedLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public calcCenter(value: number): number {
    return -value / 2;
  }
}
