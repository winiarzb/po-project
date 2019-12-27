import {UserRole} from '../enums/user-role.enum';

export class User {
  public id: number;
  public version: number;
  public name: string;
  public alias: string;
  public birthDate: Date;
  public username: string;
  public password: string;
  public registeredDate: Date;
  public enabled: boolean;
  public userRole: UserRole;
}
