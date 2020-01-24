import {ContractPriority} from '../../../../shared/enums/contract-priority.enum';
import {ContractStatus} from '../../../../shared/enums/contract-status.enum';

export class ContractCreateRequest {
  public clientId: number;
  public contractStatus: ContractStatus;
  public districtId: number;
  public fromDate: Date;
  public name: string;
  public payment: number;
  public priority: ContractPriority;
  public thruDate: Date;
  public victimId: number;
}
