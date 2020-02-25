import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserStateService} from '../../modules/user/services/user-state.service';
import {NavigatorService} from '../services/navigator.service';
import {AuthGuardBase} from './auth.abstract';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard extends AuthGuardBase implements CanActivate {

  constructor(
    _userService: UserStateService,
    _navigator: NavigatorService
  ) {
    super(_userService, _navigator);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.userService.isLogged) {
      return this.login();
    } else {
      return true;
    }
  }

}
