import { Injectable } from '@angular/core';
import {ResourcesApiService} from '../../../../shared/services/resources-api.service';
import {Contract} from '../../../../shared/models/contract.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContractStatus} from '../../../../shared/enums/contract-status.enum';
import {ContractChangePaymentRequest} from '../../models/contract/contract-change-payment-request.model';
import {ContractChangeStatusRequest} from '../../models/contract/contract-change-status-request.model';

@Injectable({
  providedIn: 'root'
})
export class ContractResourceApiService extends ResourcesApiService<Contract> {

  constructor(
    httpClient: HttpClient
  ) {
    super(httpClient, 'contract');
  }

  public getByStatus(status: ContractStatus): Observable<Contract[]> {
    return this.get(`all/status/${status}`);
  }

  public getByUser(userId: number): Observable<Contract[]> {
    return this.get(`all/user/${userId}`);
  }

  public changePayment(request: ContractChangePaymentRequest): Observable<Contract> {
    return this.post('changePayment', request);
  }

  public changeStatus(request: ContractChangeStatusRequest): Observable<Contract> {
    return this.post('changeStatus', request);
  }
}
