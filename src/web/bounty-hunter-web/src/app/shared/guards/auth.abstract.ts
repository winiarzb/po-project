import {UserStateService} from '../../modules/user/services/user-state.service';
import {isDefined} from '../utils/is-defined';
import {NavigatorService} from '../services/navigator.service';

export class AuthGuardBase {
  constructor(
    protected userService: UserStateService,
    protected navigator: NavigatorService
  ) {}

  protected isAdmin(): boolean {
    return isDefined(this.userService.isLogged) &&
      this.userService.state.role.roleName === 'ADMIN';
  }

  protected unauthorized(): boolean {
    this.navigator.unauthorized();
    return false;
  }

  protected login(): boolean {
    this.navigator.login();
    return false;
  }
}
