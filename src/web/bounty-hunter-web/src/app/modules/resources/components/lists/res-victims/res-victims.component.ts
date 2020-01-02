import {Component, Inject, OnInit} from '@angular/core';
import {ResourceListComponentBase} from '../../resource-list-component.abstract';
import {ResourceStateService} from '../../../services/resource-state.service';
import {Victim} from '../../../../../shared/models/victim.model';


@Component({
  selector: 'bh-res-victims',
  templateUrl: './res-victims.component.html',
  styleUrls: ['./res-victims.component.scss']
})
export class ResVictimsComponent extends ResourceListComponentBase<Victim[]> {

  constructor(
    @Inject('ResVictimStateService') stateService: ResourceStateService<Victim[]>
  ) {
    super(stateService);
  }
}
