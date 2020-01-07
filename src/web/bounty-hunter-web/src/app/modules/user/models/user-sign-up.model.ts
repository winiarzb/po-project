import {District} from '../../../shared/models/district.model';
import {Galaxy} from '../../../shared/models/galaxy.model';

export class UserSignUpModel {
  public districts: District[];
  public galaxy: Galaxy;
  public password: string;
  public planets: Galaxy;
  public role: string; // ?
  public username: string;
}
