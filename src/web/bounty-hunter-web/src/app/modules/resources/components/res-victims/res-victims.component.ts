import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {Victim} from '../../../../shared/models/victim.model';

@Component({
  selector: 'bh-res-victims',
  templateUrl: './res-victims.component.html',
  styleUrls: ['./res-victims.component.scss']
})
export class ResVictimsComponent implements OnInit {

  constructor(
    @Inject('ResVictimStateService') private _state: ResourceStateService<Victim[]>
  ) { }

  ngOnInit() {
  }

}
