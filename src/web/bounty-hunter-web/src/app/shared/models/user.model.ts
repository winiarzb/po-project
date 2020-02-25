import {UserRole} from '../enums/user-role.enum';
import {IIdentifiable} from '../interfaces/identifiable.interface';
import {Role} from './role.model';

export class User implements IIdentifiable {
  public id: number;
  public version: number;
  public name: string;
  public alias: string;
  public birthDate: Date;
  public username: string;
  public password: string;
  public registeredDate: Date;
  public enabled: boolean;
  public role: Role;
}
