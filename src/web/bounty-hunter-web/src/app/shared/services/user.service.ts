import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public get isLogged(): boolean {
    return false;
  }

  constructor() { }

}
