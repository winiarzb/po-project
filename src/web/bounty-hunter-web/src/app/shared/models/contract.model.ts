import {ContractStatus} from '../enums/contract-status.enum';
import {ContractPriority} from '../enums/contract-priority.enum';
import {User} from './user.model';
import {Victim} from './victim.model';
import {District} from './district.model';
import {Review} from './review.model';

export class Contract {
  public id: number;
  public version: number;
  public name: string;
  public contractStatus: ContractStatus;
  public payment: number;
  public priority: ContractPriority;
  public fromDate: Date;
  public thruDate: Date;
  public hunter: User;
  public client: User;
  public victim: Victim;
  public district: District;
  public review?: Review;
}
