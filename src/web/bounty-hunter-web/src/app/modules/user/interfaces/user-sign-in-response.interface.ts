import {User} from '../../../shared/models/user.model';

export interface IUserSignInResponse {
  jwt: string
  user: User;
};
