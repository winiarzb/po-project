import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../services/resource-state.service';
import {DictionaryModel} from '../../../../shared/models/dictionary.model';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';

@Component({
  selector: 'bh-res-dictionaries',
  templateUrl: './res-dictionaries.component.html',
  styleUrls: ['./res-dictionaries.component.scss']
})
export class ResDictionariesComponent extends ResourceEditComponentBase<DictionaryModel[]> {

  constructor(
    @Inject('ResDictionaryStateService') stateService: ResourceStateService<DictionaryModel[]>
  ) {
    super(stateService);
  }
}
