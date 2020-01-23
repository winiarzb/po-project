import {Galaxy} from '../../../shared/models/galaxy.model';
import {Role} from '../../../shared/models/role.model';
import {Planet} from '../../../shared/models/planet.model';

export class UserSignUpModel {
  public password: string;
  public galaxy: Galaxy;
  public role: Role;
  public username: string;
  public planets: Planet[];
}
