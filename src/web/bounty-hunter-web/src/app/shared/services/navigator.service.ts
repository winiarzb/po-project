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

  public dashboard(): Promise<boolean> {
    return this._router.navigate(['/']);
  }
  public registration(): Promise<boolean> {
    return this._router.navigate(['sign-up']);
  }

  public auction(id: number): Promise<boolean> {
    return this._router.navigate([`/contract/auction/${id}`]);
  }

  public contractPreview(id: number): Promise<boolean> {
    return this._router.navigate([`/contract/preview/${id}`]);
  }

  public unauthorized(): Promise<boolean> {
    return this._router.navigate(['/401']);
  }
}
