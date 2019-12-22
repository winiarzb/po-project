import { Injectable } from '@angular/core';
import {RequestFactoryServiceBase} from '../../../../shared/services/request-factory-service.abstract';

@Injectable({
  providedIn: 'root'
})
export class ResPlanetRequestFactoryService extends RequestFactoryServiceBase {

  constructor() {
    super();
  }
}
