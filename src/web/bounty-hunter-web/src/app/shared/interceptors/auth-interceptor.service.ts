import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {UserStateService} from '../../modules/user/services/user-state.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private _userService: UserStateService
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this._userService.isLogged) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${this._userService.loggedUser.token}`)
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
