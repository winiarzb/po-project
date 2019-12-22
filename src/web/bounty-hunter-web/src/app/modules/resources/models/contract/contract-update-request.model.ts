import {ContractStatus} from '../../../../shared/enums/contract-status.enum';
import {District} from '../../../../shared/models/district.model';
import {User} from '../../../../shared/models/user.model';
import {ContractPriority} from '../../../../shared/enums/contract-priority.enum';
import {Review} from '../../../../shared/models/review.model';
import {Victim} from '../../../../shared/models/victim.model';

export class ContractUpdateRequest {
  public client: User;
  public contractStatus: ContractStatus;
  public district: District;
  public fromDate: Date;
  public hunter: User;
  public id: number;
  public name: string;
  public payment: number;
  public priority: ContractPriority;
  public review: Review;
  public thruDate: Date;
  public version: number;
  public victim: Victim;
}
