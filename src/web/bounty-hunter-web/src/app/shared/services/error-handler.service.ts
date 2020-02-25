import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler {

  constructor() {
    super();
  }

  handleError(error: Error | HttpErrorResponse): void {
    console.error(error);
  }
}
