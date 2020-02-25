import {UserSignUpModel} from './user-sign-up.model';
import {District} from '../../../shared/models/district.model';

export class UserSignUpRequest extends UserSignUpModel {
  public districts: District[];
}
