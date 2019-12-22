import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {DictionaryModel} from '../../../../shared/models/dictionary.model';

@Component({
  selector: 'bh-res-dictionaries',
  templateUrl: './res-dictionaries.component.html',
  styleUrls: ['./res-dictionaries.component.scss']
})
export class ResDictionariesComponent implements OnInit {

  constructor(
    @Inject('ResDictionaryStateService') private _state: ResourceStateService<DictionaryModel[]>
  ) { }

  ngOnInit() {
  }

}
