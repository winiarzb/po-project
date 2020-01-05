import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResourceNavigationService {

  constructor(
    private _router: Router
  ) { }

  public navigate(url: string): void {
    this._router.navigate([`/resources/${url}`]);
  }
}
