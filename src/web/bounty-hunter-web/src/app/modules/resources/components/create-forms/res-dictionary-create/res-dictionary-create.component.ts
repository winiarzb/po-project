import {Component, Inject, OnInit} from '@angular/core';
import {ResourceStateService} from '../../../services/resource-state.service';
import {ResourceCreateComponentBase} from '../resource-create-component.abstract';
import {DictionaryCreateRequest} from '../../../models/dictionary/dictionary-create-request.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bh-res-dictionary-create',
  templateUrl: './res-dictionary-create.component.html',
  styleUrls: ['./res-dictionary-create.component.scss']
})
export class ResDictionaryCreateComponent extends ResourceCreateComponentBase<DictionaryCreateRequest> {

  constructor(
    @Inject('ResDictionaryStateService') stateService: ResourceStateService<DictionaryCreateRequest>,
    activatedRoute: ActivatedRoute
  ) {
    super(stateService, activatedRoute);
  }

}
