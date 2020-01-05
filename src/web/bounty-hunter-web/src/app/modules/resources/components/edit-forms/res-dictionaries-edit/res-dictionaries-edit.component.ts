import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {ResourceEditComponentBase} from '../resource-edit-component.abstract';
import {DictionaryModel} from '../../../../../shared/models/dictionary.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-dictionaries-edit',
  templateUrl: './res-dictionaries-edit.component.html',
  styleUrls: ['./res-dictionaries-edit.component.scss']
})
export class ResDictionariesEditComponent extends ResourceEditComponentBase<DictionaryModel> {

  constructor(
    @Inject('ResDictionaryStateService') stateService: ResourceStateService<DictionaryModel>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }

}
