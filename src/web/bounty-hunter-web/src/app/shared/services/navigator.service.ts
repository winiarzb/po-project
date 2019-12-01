import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {INavigationLink, NAVIGATION} from "../../../navigation";

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  public readonly navigation: ReadonlyArray<INavigationLink> = Object.freeze(NAVIGATION);

  constructor(
    private _router: Router
  ) {
  }

  public login(): Promise<boolean> {
    return this._router.navigate(['login']);
  }
}
