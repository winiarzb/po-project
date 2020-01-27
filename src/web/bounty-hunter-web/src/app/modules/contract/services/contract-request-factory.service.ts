import { Injectable } from '@angular/core';
import {ContractChangePaymentRequest} from '../../resources/models/contract/contract-change-payment-request.model';
import {ResContractRequestFactoryService} from '../../resources/services/request-services/res-contract-request-factory.service';
import {ContractStatus} from '../../../shared/enums/contract-status.enum';
import {ContractChangeStatusRequest} from '../../resources/models/contract/contract-change-status-request.model';

@Injectable({
  providedIn: 'root'
})
export class ContractRequestFactoryService extends ResContractRequestFactoryService {

  constructor() {
    super();
  }

  public getChangePaymentRequest(contractId: number, hunterId: number, payment: number): ContractChangePaymentRequest {
    const request = new ContractChangePaymentRequest();
    request.contractId = contractId;
    request.hunterId = hunterId;
    request.payment = payment;
    return request;
  }

  public getChangeStatus(contractId: number, contractStatus: ContractStatus): ContractChangeStatusRequest {
    const request = new ContractChangeStatusRequest();
    request.contractId = contractId;
    request.contractStatus = contractStatus;
    return request;
  }
}
