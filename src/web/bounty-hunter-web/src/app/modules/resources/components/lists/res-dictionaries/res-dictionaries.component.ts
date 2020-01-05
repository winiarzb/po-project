import {Component, Inject, OnInit} from '@angular/core';
import {DictionaryModel} from '../../../../../shared/models/dictionary.model';
import {ResourceListComponentBase} from '../../resource-list-component.abstract';
import {ResourceStateService} from '../../../services/resource-state.service';

@Component({
  selector: 'bh-res-dictionaries',
  templateUrl: './res-dictionaries.component.html',
  styleUrls: ['./res-dictionaries.component.scss']
})
export class ResDictionariesComponent extends ResourceListComponentBase<DictionaryModel[]> {

  constructor(
    @Inject('ResDictionaryStateService') stateService: ResourceStateService<DictionaryModel[]>
  ) {
    super(stateService);
  }
}
