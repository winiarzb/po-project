import {User} from '../../../shared/models/user.model';

export class UserLogged extends User {
  public expiryDate: string;
  public token: string;
}
