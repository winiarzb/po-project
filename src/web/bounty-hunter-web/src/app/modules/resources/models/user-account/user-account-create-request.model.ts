import {UserRole} from '../../../../shared/enums/user-role.enum';

export class UserAccountCreateRequest {
  public alias: string;
  public birthDate: Date;
  public enabled: boolean;
  public name: string;
  public password: string;
  public registeredDate: Date;
  public userRole: UserRole;
  public username: string;
}
