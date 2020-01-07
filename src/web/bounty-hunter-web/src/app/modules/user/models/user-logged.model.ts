import {User} from '../../../shared/models/user.model';

export class UserLogged extends User {
  public token: string;

  constructor(token: string, user: User) {
    super();
    this.token = token;
    this.username = user.username;
    this.alias = user.alias;
    this.role = user.role;
    this.birthDate = user.birthDate;
    this.registeredDate = user.registeredDate;
    this.enabled = user.enabled;
    this.id = user.id;
  }
}
