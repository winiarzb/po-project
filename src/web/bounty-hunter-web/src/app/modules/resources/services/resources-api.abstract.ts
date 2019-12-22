import {ApiServiceBase} from '../../../shared/services/api-service.abstract';
import {HttpClient} from '@angular/common/http';

export abstract class ResourcesApiBase extends ApiServiceBase {
  protected constructor(
    httpClient: HttpClient
  ) {
    super(httpClient);
  }
}
