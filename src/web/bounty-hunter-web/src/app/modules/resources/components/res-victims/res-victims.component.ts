import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {Victim} from '../../../../shared/models/victim.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';

@Component({
  selector: 'bh-res-victims',
  templateUrl: './res-victims.component.html',
  styleUrls: ['./res-victims.component.scss']
})
export class ResVictimsComponent extends ResourceEditComponentBase<Victim[]> {

  constructor(
    @Inject('ResVictimStateService') stateService: ResourceStateService<Victim[]>
  ) {
    super(stateService);
  }
}
