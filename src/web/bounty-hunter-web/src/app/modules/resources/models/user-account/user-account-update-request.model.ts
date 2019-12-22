import {UserRole} from '../../../../shared/enums/user-role.enum';

export class UserAccountUpdateRequest {
  public alias: string;
  public birthDate: Date;
  public enabled: boolean;
  public id: number;
  public name: string;
  public password: string;
  public registeredDate: Date;
  public userRole: UserRole;
  public username: string;
  public version: number;
}
