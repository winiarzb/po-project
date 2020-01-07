import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserStateService} from '../../modules/user/services/user-state.service';
import {NavigatorService} from '../services/navigator.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  constructor(
    private _userService: UserStateService,
    private _navigator: NavigatorService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this._userService.isLogged) {
      this._navigator.login();
      return false;
    } else {
      return true;
    }
  }

}
