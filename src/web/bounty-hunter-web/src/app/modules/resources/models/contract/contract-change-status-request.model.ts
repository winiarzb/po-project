import {ContractStatus} from '../../../../shared/enums/contract-status.enum';

export class ContractChangeStatusRequest {
  public contractId: number;
  public contractStatus: ContractStatus;
}
